import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import {Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  id: number;
  title: string;
  body: string;
  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get<any>(this._url).pipe(catchError(this.errorHandler))
    
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
