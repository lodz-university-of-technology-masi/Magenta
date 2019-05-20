import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorPageComponent } from './moderator-page/moderator-page.component';
import {ModeratorRoutingModule} from './moderator-routing.module';
import {TestsModule} from '../tests/tests.module';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule} from '@angular/material';
import { PositionsEditComponent } from './positions-edit/positions-edit.component';
import { ModeratorTestsComponent } from './moderator-tests/moderator-tests.component';
import { RedactorsListComponent } from './redactors-list/redactors-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    ModeratorRoutingModule,
    TestsModule,
    SharedModule
  ],
  declarations: [ModeratorPageComponent, PositionsEditComponent, ModeratorTestsComponent, RedactorsListComponent]
})
export class ModeratorModule { }
