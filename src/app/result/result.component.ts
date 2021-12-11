import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score: number = parseInt(localStorage.getItem("result"));
  fullName= localStorage.getItem("fullName");
  Email=  localStorage.getItem("email");
  birthDate= new Date ( localStorage.getItem("birthDate")).getFullYear();
  currentYear = new Date().getFullYear();
  age = this.currentYear - (this.birthDate);
  showen=false;

  constructor() { }

  ngOnInit(): void {

    if (  parseInt(localStorage.getItem("result")) >= 70 ) this.showen = true;
  }

}
