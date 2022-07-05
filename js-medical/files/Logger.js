import * as fs from "fs";

import { BloodPressureExam } from "../exams/BloodPressureExam.js";
import { CholesterolLevelExam } from "../exams/CholesterolLevelExam.js";
import { SugarLevelExam } from "../exams/SugarLevelExam.js";

const DEFAULT_PATH = "log/log.txt";

export class Logger {
    constructor(path) {
        this.path = path === undefined ? DEFAULT_PATH : path;
        this.buffer = "";
    }

    logPersonCreated(person, personClass) {
        this.buffer = this.buffer.concat(
            `${this.getCurrentDatePrefixAsString()} Kreiran ${personClass} '${
                person.firstName
            }'\n`
        );
    }

    logDoctorCreated(doctor) {
        this.logPersonCreated(doctor, "doktor");
    }

    logPatientCreated(patient) {
        this.logPersonCreated(patient, "pacijent");
    }

    logDoctorSet(patient, doctor) {
        this.buffer = this.buffer.concat(
            `${this.getCurrentDatePrefixAsString()} Pacijent '${
                patient.firstName
            }' bira za izabranog lekara doktora '${doctor.firstName}'\n`
        );
    }

    logSetExamForPatientByDoctor(exam, patient, doctor) {
        this.buffer = this.buffer.concat(
            `${this.getCurrentDatePrefixAsString()} Doktor '${
                doctor.firstName
            }' zakazuje pregled tipa '${exam.description}' za pacijenta '${
                patient.firstName
            }'\n`
        );
    }

    logPerformExamByPatient(exam, patient) {
        this.buffer = this.buffer.concat(
            `${this.getCurrentDatePrefixAsString()} Pacijent '${
                patient.firstName
            }' ${exam.getExamInfo()}`
        );
    }

    getCurrentDatePrefixAsString() {
        return `[${new Date().toLocaleString()}]`;
    }

    exportBufferToLogFile() {
        fs.writeFile(this.path, this.buffer, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
}
