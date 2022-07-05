export class Person {
    constructor(firstName, lastName, logger) {
        if (this.constructor == Person) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.logger = logger;
    }
}
