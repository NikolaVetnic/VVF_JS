import { Person } from "./Person.js";
import { createExam } from "../exams/ExamFactory.js";

export class Doctor extends Person {
    constructor(firstName, lastName, specialization, logger) {
        super(firstName, lastName, logger);

        this.specialization = specialization;
        this.patients = [];

        this.logger.logDoctorCreated(this);
    }

    addPatient(patient) {
        if (this.patients.filter((e) => e === patient).length > 0) {
            return;
        }

        this.patients.push(patient);
    }

    addExam(patient, examType) {
        if (this.patients.filter((e) => e === patient).length === 0) {
            throw new Error("patient does not belong to doctor");
        }

        const currentExam = createExam(examType);
        patient.scheduleExam(currentExam);

        this.logger.logSetExamForPatientByDoctor(currentExam, patient, this);
    }
}
