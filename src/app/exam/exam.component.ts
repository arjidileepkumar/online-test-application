import { Iquestion, Ianswer } from './../interface/iquestion';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from '../service/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  // Declare Properties, Objects, & Arrays
  currentQues :any ;
  index= 0 ;
  showN = false;
  showP = false;
  isValidFormSubmitted = false;
	user :any = {};
  errors={};

  fullName= localStorage.getItem("fullName");
  Email=  localStorage.getItem("email");
  birthDate= new Date ( localStorage.getItem("birthDate")).getFullYear();
  currentYear = new Date().getFullYear();
  age = this.currentYear - (this.birthDate);

  answers: Ianswer [];

  questions : Iquestion [] ;
   

 
  @ViewChild('alertM') myErrorText: ElementRef;
  constructor(private examService : ExamService , private router: Router) {

    
    
   }

  ngOnInit(): void {

    //get all question and their options and answwers from service
    this.questions=this.examService.getQuestion();
    this.answers=this.examService.getAnswers();
  }

  onSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    console.log( form.controls[`option0`].value);
     if(form.invalid){
       this.showN=!this.showN;
      this.myErrorText.nativeElement.focus();
      return;	
     }
     this.showN=false;
    for ( var i = 0 ; i<4 ; i++ ){
      this.user[i]= form.controls[`option${i}`].value;
    }
    var counter=0 , result = 0 ;
    for (let answer in this.user) {
      (this.user[answer] == this.questions[counter].correctAnswer) ? result=result+(this.questions[counter].score) : result=result;
      counter++;
     
    }
    localStorage.setItem("result",  (result / 10 * 100 ).toString());
    this.router.navigate(['/result']);
   
 }
 

 
  
}
