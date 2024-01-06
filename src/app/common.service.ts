import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  logout() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}
  
getmethod():Observable<string[]>{
  return this.http.get<string[]>('https://jsonplaceholder.typicode.com/posts');

}
}
 