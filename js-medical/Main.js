import * as fs from "fs";

import { Doctor } from "./people/Doctor.js";
import { Patient } from "./people/Patient.js";
import { saveLog } from "./files/SaveLog.js";

let log = "";

const examTypes = [
    "BLOOD_PRESSURE_EXAM",
    "CHOLESTEROL_LEVEL_EXAM",
    "SUGAR_LEVEL_EXAM",
];

let doktorMilanMilanovic = new Doctor("Milan", "Milanovic", "opsta praksa");
log = log.concat(
    "[" + new Date().toLocaleString() + "] Kreiran doktor 'Milan'\n"
);

let pacijentDraganDraganic = new Patient(
    "Dragan",
    "Draganic",
    "1234567890123",
    "1"
);
log = log.concat(
    "[" + new Date().toLocaleString() + "] Kreiran pacijent 'Dragan'\n"
);

pacijentDraganDraganic.setDoctor(doktorMilanMilanovic);
log = log.concat(
    "[" +
        new Date().toLocaleString() +
        "] Pacijent 'Dragan' bira za izabranog lekara doktora 'Milan'\n"
);

doktorMilanMilanovic.addExam(pacijentDraganDraganic, examTypes[2]);
log = log.concat(
    "[" +
        new Date().toLocaleString() +
        "] Doktor 'Milan' zakazuje merenje nivoa secera u krvi za pacijenta 'Dragan'\n"
);

doktorMilanMilanovic.addExam(pacijentDraganDraganic, examTypes[0]);
log = log.concat(
    "[" +
        new Date().toLocaleString() +
        "] Doktor 'Milan' zakazuje merenje krvnog pritiska za pacijenta 'Dragan'\n"
);

while (pacijentDraganDraganic.examsToDo.length > 0) {
    log = log.concat(
        "[" +
            new Date().toLocaleString() +
            "] " +
            pacijentDraganDraganic.performNextExam()
    );
}

saveLog(log);
