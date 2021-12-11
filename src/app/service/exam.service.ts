import { Injectable } from '@angular/core';
import { Ianswer, Iquestion } from '../interface/iquestion';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  questions : Iquestion [] = [{
    id : 1 ,
    question : "What does HTML stand for?",
    correctAnswer : 2 ,
    score:3
  },{
    id : 2 ,
    question : "State whether the given statement is true or false. !DOCTYPE is case sensitive”",
    correctAnswer : 5 ,
    score:3
  },
  {
    id : 3 ,
    question : "State whether the given statement is true or false. “We can intermix XHTML and HTML 4.01 documents”",
    correctAnswer : 6 ,
    score:2
  },
  {
    id : 4 ,
    question : "State true or false. It is faster to render HTML and CSS than to interpret and execute JavaScript.",
    correctAnswer : 5 ,
    score:2
  }
   
  ];

  answers : Ianswer [] = [
    {
      id:1,
      answer : " Hyperlinks and Text Markup Language",  
      questionNo: 1
    },{
      id:2,
      answer : " Hyper Text Markup Language",
      questionNo: 1
    },{
      id:3,
      answer : " Hyperlinks and Text Markup Language", 
      questionNo: 1
    }
    ,{
      id:5,
      answer : "true", 
      questionNo: 2
    },
    {
      id:6,
      answer : "false", 
      questionNo: 2
    }
  ];

  constructor() { }

  getQuestion () {
    return this.questions;
  }

  getAnswers () {
    return this.answers;
  }

}
