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
}
