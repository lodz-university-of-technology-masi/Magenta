import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../../models/question';

@Component({
  selector: 'app-scala-answer',
  templateUrl: './scala-answer.component.html',
  styleUrls: ['./scala-answer.component.css']
})
export class ScalaAnswerComponent implements OnInit {

  constructor() { }

  @Input()
  question: Question;

  ngOnInit() {
    if (this.question.min === this.question.max && this.question.min === 0) {
      this.question.min = 1;
      this.question.max = 5;
    }
  }

  handleInputMin(event: any): void {
    this.question.min = + event.target.value;
    if (this.question.min > this.question.max) {
      this.question.min = this.question.max - 1;
      event.target.value = this.question.max - 1;
    }
  }
  handleInputMax(event: any): void {
    this.question.max = + event.target.value;
    if (this.question.max < this.question.min) {
      this.question.max = this.question.min + 1;
      event.target.value = this.question.min + 1;
    }
  }
}
