import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
projects = [
  { title: 'project 1', image: '/images/port3.png'},
  {title: 'project 2', image: '/images/poert1.png'},
  {title: 'project 3', image: '/images/port2.png'},
]

curentItem:any ={}


sayImage(item:any):void{
  
  this.curentItem = item;
}
}
