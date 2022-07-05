import { Exam } from "./Exam.js";

export class SugarLevelExam extends Exam {
    constructor(dateTime, value, lastMealTime) {
        super(dateTime);
        this.value = value;
        this.lastMealTime = lastMealTime;
    }
}
