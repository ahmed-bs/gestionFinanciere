import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Utilisateur } from '../utilisateur';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
islog : number;
 

  signup(user: Utilisateur): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/auth/signup`, user).pipe(
        catchError(this.handleError)
    )
  }
  login(user: Utilisateur): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/auth/login`, user).pipe(
        catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  constructor(
    private httpClient: HttpClient
  ) {  this.islog  }


}
