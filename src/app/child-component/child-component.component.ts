import { Component, Input, EventEmitter, Output, AfterContentInit, ContentChild, ElementRef, ViewChild, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() parentComponentValue = '';
  @ContentChild('content') contenthild: any;
  @ViewChild('inptColor') inptChild: any;
  @Input() parentVal: any;
  @Output() notifyChild: EventEmitter<string> = new EventEmitter<string>();
  childViewChildValue = 'This is for view child value';
  constructor() {
  }

  sendValueToChildComponent() {
    this.notifyChild.emit('Event from child component')
  }
  ngAfterContentInit(): void {
    this.contenthild.nativeElement.setAttribute("style", "color:red");
  }
  ngAfterContentChecked(): void {
    debugger
    this.contenthild.nativeElement.setAttribute("style", "color:" + this.parentVal);
  }
  ngAfterViewInit(): void {
    this.inptChild.nativeElement.setAttribute("style", "background-color: red;");
  }
  ngAfterViewChecked(): void {
    this.inptChild.nativeElement.setAttribute("style", "background-color: " + this.parentVal);

  }
}
