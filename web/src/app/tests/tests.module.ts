import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { SingleQuestionComponent } from './add-questions/single-question/single-question.component';
import { ScalaAnswerComponent } from './add-questions/single-question/scala-answer/scala-answer.component';
import { VariantAnswerComponent } from './add-questions/single-question/variant-answer/variant-answer.component';
import {TestsRoutingModule} from './tests-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestsRoutingModule
  ],
  declarations: [AddQuestionsComponent,
    SingleQuestionComponent,
    ScalaAnswerComponent,
    VariantAnswerComponent]
})
export class TestsModule { }
