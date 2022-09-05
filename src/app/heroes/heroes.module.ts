import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HeroesModule { }
