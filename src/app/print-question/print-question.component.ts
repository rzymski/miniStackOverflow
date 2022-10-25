import { Component, Input, OnInit } from '@angular/core';
import { QuestionClass } from '../classes/question';

@Component({
  selector: 'print-question',
  templateUrl: './print-question.component.html',
  styleUrls: ['./print-question.component.css']
})
export class PrintQuestionComponent implements OnInit {
  @Input() question!:QuestionClass;
  @Input() answered!:boolean;
  visited:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  questionClicked():void{
    this.visited=true;
  }

}
