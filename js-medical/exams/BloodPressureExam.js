import { Exam } from "./Exam.js";

export class BloodPressureExam extends Exam {
    constructor(highValue = null, lowValue = null, pulse = null) {
        super("BLOOD_PRESSURE_EXAM");
        this.highValue = highValue;
        this.lowValue = lowValue;
        this.pulse = pulse;
    }

    performExam() {
        this.highValue = parseInt(Math.random() * 40, 10) + 100;
        this.lowValue = parseInt(Math.random() * 40, 10) + 60;
        this.pulse = parseInt(Math.random() * 40, 10) + 60;
    }
}
