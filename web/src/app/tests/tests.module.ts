import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestEditorComponent } from './test-editor/test-editor.component';
import { SingleQuestionComponent } from './test-editor/single-question/single-question.component';
import { ScalaAnswerComponent } from './test-editor/single-question/scala-answer/scala-answer.component';
import { VariantAnswerComponent } from './test-editor/single-question/variant-answer/variant-answer.component';
import {TestsRoutingModule} from './tests-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule, MatButtonModule, MatRadioModule} from '@angular/material';
import { ResolveTestComponent } from './resolve-test/resolve-test.component';
import { RedactorTestsComponent } from './redactor-tests/redactor-tests.component';
import { SolvedTestComponent } from './solved-test/solved-test.component';
import { CheckSolvedTestComponent } from './check-solved-test/check-solved-test.component';
import { UserTestsComponent } from './user-tests/user-tests.component';
import { UserSolutionComponent } from './user-solution/user-solution.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import {TestsResolveService} from './services/tests-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    TestsRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    BrowserAnimationsModule,
  ],
  declarations: [TestEditorComponent,
    SingleQuestionComponent,
    ScalaAnswerComponent,
    VariantAnswerComponent,
    ResolveTestComponent,
    RedactorTestsComponent,
    SolvedTestComponent,
    CheckSolvedTestComponent,
    UserTestsComponent,
    UserSolutionComponent],
  exports: [
    UserTestsComponent
    UserSolutionComponent,
    AllTestsComponent],
})
export class TestsModule { }
