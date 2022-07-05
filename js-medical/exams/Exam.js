export class Exam {
    constructor(description) {
        if (this.constructor == Exam) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.dateTime = new Date();
        this.description = description;
    }

    performExam() {}
}
