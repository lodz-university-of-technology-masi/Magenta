import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { SingleQuestionComponent } from './add-questions/single-question/single-question.component';
import { ScalaAnswerComponent } from './add-questions/single-question/scala-answer/scala-answer.component';
import { VariantAnswerComponent } from './add-questions/single-question/variant-answer/variant-answer.component';
import {TestsRoutingModule} from './tests-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule, MatButtonModule, MatRadioModule} from '@angular/material';
import { ResolveTestComponent } from './resolve-test/resolve-test.component';

@NgModule({
  imports: [
    CommonModule,
    TestsRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    BrowserAnimationsModule,
  ],
  declarations: [AddQuestionsComponent,
    SingleQuestionComponent,
    ScalaAnswerComponent,
    VariantAnswerComponent,
    ResolveTestComponent]
})
export class TestsModule { }
