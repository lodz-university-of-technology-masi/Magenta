import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Question} from '../../../models/question';
import {NUMERIC_QUESTION, OPEN_QUESTION, SCALA_QUESTION, VARIANT_QUESTION} from '../../../shared/utils/global-variables';
import {ScalaAnswerComponent} from './scala-answer/scala-answer.component';
import {VariantAnswerComponent} from './variant-answer/variant-answer.component';

export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question: Question;

  types: Type[] = [
    {value: VARIANT_QUESTION, viewValue: 'Wyboru'},
    {value: SCALA_QUESTION, viewValue: 'Skali'},
    {value: NUMERIC_QUESTION, viewValue: 'Numeryczne'},
    {value: OPEN_QUESTION, viewValue: 'Otwarte'},
  ];
  selected: string;

  @ViewChild('scala')
  scala: ScalaAnswerComponent;
  @ViewChild('variant')
  variant: VariantAnswerComponent;

  ngOnInit() {

  }

  isScala(): boolean {
    return this.question.type === SCALA_QUESTION;
  }
  isVariant(): boolean {
    return this.question.type === VARIANT_QUESTION;
  }
}
