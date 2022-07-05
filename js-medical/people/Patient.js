import { Person } from "./Person.js";

export class Patient extends Person {
    constructor(firstName, lastName, personalId, medicalRecordNo, logger) {
        super(firstName, lastName, logger);

        this.personalId = personalId;
        this.medicalRecordNo = medicalRecordNo;
        this.doctor = {};
        this.examsToDo = new Array();
        this.examsDone = new Array();

        this.logger.logPatientCreated(this);
    }

    setDoctor(doctor) {
        this.doctor = doctor;
        this.doctor.addPatient(this);

        this.logger.logDoctorSet(this, doctor);
    }

    scheduleExam(exam) {
        this.examsToDo.push(exam);
    }

    performNextExam() {
        if (this.examsToDo.length === 0) {
            throw new Error("no scheduled exams found");
        }

        const currentExam = this.examsToDo.pop();
        currentExam.performExam();
        this.examsDone.push(currentExam);

        this.logger.logPerformExamByPatient(currentExam, this);
    }

    performAllExams() {
        while (this.examsToDo.length > 0) {
            try {
                this.performNextExam();
            } catch (err) {
                console.error(`${err.name}: ${err.message}`);
            }
        }
    }
}
