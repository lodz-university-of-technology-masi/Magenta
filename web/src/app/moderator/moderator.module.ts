import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorPageComponent } from './moderator-page/moderator-page.component';
import {ModeratorRoutingModule} from './moderator-routing.module';
import {TestsModule} from '../tests/tests.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModeratorRoutingModule,
    TestsModule,
    SharedModule
  ],
  declarations: [ModeratorPageComponent]
})
export class ModeratorModule { }
