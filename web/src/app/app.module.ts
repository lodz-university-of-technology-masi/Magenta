import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {MainPageModule} from './main-page/main-page.module';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationModule} from './authentication/authentication.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserEditModule} from './user-edit/user-edit.module';
import {DialogsModule} from './dialogs/dialogs.module';
import {ErrorModule} from './error/error.module';
import {Interceptor} from './interceptor';
import {RedactorModule} from './redactor/redactor.module';
import {TestsModule} from './tests/tests.module';
import {UserModule} from './user/user.module';
import {ModeratorModule} from './moderator/moderator.module';
import {MetricsProcessorModule} from "./metrics-processor/metrics-processor.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainPageModule,
    UserEditModule,
    TestsModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogsModule,
    ErrorModule,
    RedactorModule,
    UserModule,
    ModeratorModule,
    MetricsProcessorModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule { }
