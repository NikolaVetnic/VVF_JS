import { Exam } from "./Exam.js";

export class CholesterolLevelExam extends Exam {
    constructor(dateTime, value, lastMealTime) {
        super(dateTime);
        this.value = value;
        this.lastMealTime = lastMealTime;
    }
}
