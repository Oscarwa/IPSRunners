export class Event {
    constructor(
        public name: string,
        public date: string,
        public price: string,
        public distances: string,
        public distanceList: Array<string>,
        public route: string,
        public status: boolean,
        public description: string
        
    ) { }
}