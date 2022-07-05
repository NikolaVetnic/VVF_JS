import { Exam } from "./Exam.js";

export class CholesterolLevelExam extends Exam {
    constructor(value = null, lastMealTime = null) {
        super("CHOLESTEROL_LEVEL_EXAM");
        this.value = value;
        this.lastMealTime = lastMealTime;
    }

    performExam() {
        this.lastMealTime = new Date();
        this.value = parseInt(Math.random() * 40, 10) + 180;
    }

    getExamInfo() {
        return `je izmerio nivo holesterola u krvi: ${
            this.value
        } (poslednji obrok ${this.lastMealTime.toLocaleString()})\n`;
    }
}
