import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
  ],
})
export class DashboardModule { }
