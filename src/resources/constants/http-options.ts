import { HttpHeaders } from '@angular/common/http';
const o__token = localStorage.getItem("o__token");

export const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${o__token}`
    })
}