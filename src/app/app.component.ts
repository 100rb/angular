import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'InterviewPractice';
  parentComponent = 'Message from Parent Component';
  childMessage: any;
  data = '';
  @ViewChild(ChildComponentComponent) viewChildValue: any;
  messageFromChildUsingViewChild: any;
  results$: any;
  constructor(private http: HttpClient) {
    this.fngetJSONData = _.debounce(this.fngetJSONData, 1000);
  }
  childEvent(value: string) {
    this.childMessage = value;
  }
  ngAfterViewInit(): void {
    this.messageFromChildUsingViewChild = this.viewChildValue.childViewChildValue;
  }
  fngetJSONData() {
    debugger
    this.http.get('https://dummyjson.com/products/1').subscribe(data => {
      console.log(data);
    })
  }
}
