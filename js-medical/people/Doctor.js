import { Person } from "./Person.js";
import { BloodPressureExam } from "../exams/BloodPressureExam.js";
import { CholesterolLevelExam } from "../exams/CholesterolLevelExam.js";
import { SugarLevelExam } from "../exams/SugarLevelExam.js";

export class Doctor extends Person {
    constructor(firstName, lastName, specialization) {
        super(firstName, lastName);
        this.specialization = specialization;
        this.patients = [];
    }

    addPatient(patient) {
        if (this.patients.filter((e) => e === patient).length > 0) {
            return;
        }
        this.patients.push(patient);
    }

    addExam(patient, examType) {
        let currentPatient = this.patients.filter((e) => e === patient);

        if (this.patients.filter((e) => e === patient) === undefined) {
            return;
        }

        switch (examType) {
            case "BLOOD_PRESSURE_EXAM":
                patient.examsToDo.push(
                    new BloodPressureExam(
                        new Date(),
                        undefined,
                        undefined,
                        undefined
                    )
                );
                break;
            case "CHOLESTEROL_LEVEL_EXAM":
                patient.examsToDo.push(
                    new CholesterolLevelExam(new Date(), undefined, undefined)
                );
                break;
            case "SUGAR_LEVEL_EXAM":
                patient.examsToDo.push(
                    new SugarLevelExam(new Date(), undefined, undefined)
                );
                break;
            default:
                break;
        }
    }
}
