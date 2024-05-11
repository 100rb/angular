import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {

  changePara: any;
  userList: any;
  nameString: any='';
  ngOnInit(): void {
    this.userList = [
      {
        name: 'Saurabh',
        age: 30,
        salary: 4500
      }, {
        name: 'Sunil',
        age: 34,
        salary: 6500
      }, {
        name: 'Suraj',
        age: 30,
        salary: 5500
      },
    ]
  }

  changeValue(val: any) {
    console.log(val.value);
    this.changePara = val.value;
  }
  fnAddUser(){
    this.userList.push(
      {
        name: 'XXX',
        age: 25,
        salary: 3500
      }
    )
  }
}
