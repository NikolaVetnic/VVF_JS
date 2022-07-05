import { Doctor } from "./people/Doctor.js";
import { Patient } from "./people/Patient.js";
import { Logger } from "./files/Logger.js";

const examTypes = [
    "BLOOD_PRESSURE_EXAM",
    "CHOLESTEROL_LEVEL_EXAM",
    "SUGAR_LEVEL_EXAM",
];

const logger = new Logger();

const doktorMilanMilanovic = new Doctor(
    "Milan",
    "Milanovic",
    "opsta praksa",
    logger
);

const pacijentDraganDraganic = new Patient(
    "Dragan",
    "Draganic",
    "1234567890123",
    "1",
    logger
);

pacijentDraganDraganic.setDoctor(doktorMilanMilanovic);

try {
    doktorMilanMilanovic.addExam(pacijentDraganDraganic, examTypes[2]);
    doktorMilanMilanovic.addExam(pacijentDraganDraganic, examTypes[0]);
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

pacijentDraganDraganic.performAllExams();

// saveLog(log);
logger.exportBufferToLogFile();
