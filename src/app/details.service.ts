import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import {Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DetailsService {
   
  constructor(private http:HttpClient) { }

  getPost(id: number): Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts/"+id).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error); 
  }
  deletePost(id: number): Observable<void> {
      return this.http.delete<void>("https://jsonplaceholder.typicode.com/posts/"+id).pipe(catchError(this.errorHandler));
  }
  // editPost(id: number): Observable<ArrayBuffer> {
  //   return this.http.put<ArrayBuffer>("https://jsonplaceholder.typicode.com/posts/"+id).pipe(catchError(this.errorHandler));;
  // }
}