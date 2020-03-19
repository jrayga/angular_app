export class SessionObject {
    constructor(
        public expiration: number,
        public token: string
    ) { }
}