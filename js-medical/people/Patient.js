import { BloodPressureExam } from "../exams/BloodPressureExam.js";
import { CholesterolLevelExam } from "../exams/CholesterolLevelExam.js";
import { Person } from "./Person.js";

export class Patient extends Person {
    constructor(firstName, lastName, personalId, medicalRecordNo) {
        super(firstName, lastName);
        this.personalId = personalId;
        this.medicalRecordNo = medicalRecordNo;
        this.doctor = {};
        this.examsToDo = new Array();
        this.examsDone = new Array();
    }

    setDoctor(doctor) {
        this.doctor = doctor;
        this.doctor.addPatient(this);
    }

    performNextExam() {
        if (this.examsToDo.length === 0) {
            return;
        }

        const currentExam = this.examsToDo.pop();
        this.examsDone.push(currentExam);

        if (currentExam instanceof BloodPressureExam) {
            currentExam.highValue = parseInt(Math.random() * 40, 10) + 100;
            currentExam.lowValue = parseInt(Math.random() * 40, 10) + 60;
            currentExam.pulse = parseInt(Math.random() * 40, 10) + 60;

            return `Pacijent '${this.firstName}' je izmerio krvni pritisak: ${currentExam.lowValue} / ${currentExam.highValue} (puls ${currentExam.pulse})\n`;
        } else if (currentExam instanceof CholesterolLevelExam) {
            currentExam.lastMealTime = new Date();
            currentExam.value = parseInt(Math.random() * 40, 10) + 180;

            return `Pacijent '${
                this.firstName
            }' je izmerio nivo holesterola u krvi: ${
                currentExam.value
            } (poslednji obrok ${currentExam.lastMealTime.toLocaleString()})\n`;
        } else {
            currentExam.lastMealTime = new Date();
            currentExam.value = parseInt(Math.random() * 40, 10) + 120;

            return `Pacijent '${
                this.firstName
            }' je izmerio nivo secera u krvi: ${
                currentExam.value
            } (poslednji obrok ${currentExam.lastMealTime.toLocaleString()})\n`;
        }
    }
}
