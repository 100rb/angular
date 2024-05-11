import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sibbling-component1',
  templateUrl: './sibbling-component1.component.html',
  styleUrls: ['./sibbling-component1.component.css']
})
export class SibblingComponent1Component implements OnInit {
  constructor(private data: DataService) { }
  newName: string = '';
  ngOnInit(): void {
    this.data.nameSource.subscribe(data => {
      this.newName = data;
    })
  }
}
