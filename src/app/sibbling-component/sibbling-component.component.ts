import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sibbling-component',
  templateUrl: './sibbling-component.component.html',
  styleUrls: ['./sibbling-component.component.css']
})
export class SibblingComponentComponent {
  Date= new Date();
  constructor(private data: DataService) { }
  name: string = '';
  changeName() {
    debugger
    this.data.changeName(this.name);
  }
}
