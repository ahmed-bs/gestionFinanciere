import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,map, retry, catchError, ObservableInput} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = "http://localhost:3000/api/transactions";
  handleError: (err: any, caught: Observable<Object>) => ObservableInput<any>;


  constructor(private http: HttpClient) { }

  forstatic() {
    return this.http.get(`${this.baseUrl}`).pipe(
      map(result => result));
  }


  public sendGetRequest(){
    return this.http.get(this.baseUrl).pipe(retry(3), catchError(this.handleError));
  }

  getTransaction(idtrans: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idtrans}`);
  }
  createTransaction( Transaction : Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Transaction);
  }

  updateTransaction(idtrans: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${idtrans}`, value);
  }

  deleteTransaction(idtrans: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idtrans}`, { responseType: 'text' });
  }

  getTransactionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}