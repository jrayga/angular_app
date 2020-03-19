import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/resources/constants/api';
import { map } from 'rxjs/operators';
import { SessionObject } from 'src/resources/models/session-object';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  getSession() {
    return this.http.get(API.GETSESSION).pipe(map(session => session !== undefined))
  }

  login(loginDetails) {
    return this.http.post<SessionObject>(API.LOGIN, loginDetails).toPromise()
  }

}
