export class Employee {

    public firstName?: string;

    public constructor(
        public id: number = 0,
        firstName?: string,
        public lastName?: string,
        public title?: string,
        public location?: string,
        public birthDate?: string

    )
     {
        this.firstName = firstName;
    }
}