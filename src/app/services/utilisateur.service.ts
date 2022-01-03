import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {

  private baseUrl = 'http://localhost:3000/api/utilisateurs';

  constructor(private http: HttpClient) { }

  getUtilisateur(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUtilisateur(utilisateur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, utilisateur);
  }

  updateUtilisateur(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUtilisateur(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUtilisateursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  }

