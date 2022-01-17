import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService  {

  constructor(private http: HttpClient) { }

  configUrl = 'https://api.github.com';


  getRepos(userName: string): Observable<any[]> {
    const url = `${this.configUrl}/users/${userName}/repos`
    return this.http.get<any[]>(url)
    .pipe(
        catchError(this.handleError('fetch users', []))
      );
  }

  getOrgaRepos(userName: string): Observable < any[]> {
    const url = `${this.configUrl}/orgs/${userName}/repos`;
    return this.http.get<any[]>(url)
    .pipe(
      catchError(this.handleError('fetch orgs', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation}. Reason: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
