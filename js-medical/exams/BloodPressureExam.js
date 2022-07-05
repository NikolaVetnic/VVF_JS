import { Exam } from "./Exam.js";

export class BloodPressureExam extends Exam {
    constructor(dateTime, highValue, lowValue, pulse) {
        super(dateTime);
        this.highValue = highValue;
        this.lowValue = lowValue;
        this.pulse = pulse;
    }
}
