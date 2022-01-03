import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = "http://localhost:3000/api/category";

  constructor(private http: HttpClient) { }

  getCategory(idcat: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idcat}`);
  }

  createCategory(category: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,category);
  }

  updateCategory(idcat: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${idcat}`,value);
  }

  deleteCategory(idcat: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idcat}`, { responseType: 'text' });
  }

  getCategoriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}