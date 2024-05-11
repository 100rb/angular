import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public nameSource = new BehaviorSubject<string>('Default');
  // name = this.nameSource.asObservable()
  constructor(private http: HttpClient) { }
  changeName(name: string) {
    debugger
    this.nameSource.next(name);
  }
  getJsonList(): any {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/').subscribe(data => {
      return data;
    });
  }
}
