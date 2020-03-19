import { environment } from "../../environments/environment";
const APILocation = environment.production === false ? "http://localhost:3000/api/" : 'https://inventory.com.ph/api/';

export const API = {
    GETSESSION: APILocation + "session",
    LOGIN: APILocation + "accounts/login"
}