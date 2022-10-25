import { Component, OnInit } from '@angular/core';
import { QuestionClass } from '../classes/question';

@Component({
  selector: 'print-list-of-questions',
  templateUrl: './print-list-of-questions.component.html',
  styleUrls: ['./print-list-of-questions.component.css']
})
export class PrintListOfQuestionsComponent implements OnInit {
  questions:QuestionClass[] = [];

  constructor() {
    this.questions.push(new QuestionClass("Ja","SUPER WAZNE PYTANIE", 2, 5, 0))
    this.questions.push(new QuestionClass("Ktos","NOWE PYTANIE", 0, 1, 0))
    this.questions.push(new QuestionClass("Ja","GŁUPIE PYTANIE", 0, 2, 0))
  }

  ngOnInit(): void {
  }

}
