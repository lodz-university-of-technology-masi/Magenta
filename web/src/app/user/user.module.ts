import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { PositionsComponent } from './positions/positions.component';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material';
import {TestsModule} from '../tests/tests.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    UserRoutingModule,
    SharedModule,
    TestsModule
  ],
  declarations: [
    UserPageComponent,
    PositionsComponent]
})
export class UserModule { }
