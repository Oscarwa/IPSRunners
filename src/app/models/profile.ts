export class Profile {
    constructor(
        public uid: string,
        public email: string,
        public firstName: string,
        public lastName: string,
        public phone: string,
        public dob: string,
        public nick: string,
        public size: string,
        public admin: boolean
    ) { }
}