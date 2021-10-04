import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SectionOneComponent } from './components/section-one/section-one.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    SectionOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    SectionOneComponent
  ]
})
export class LandingPageModule { }
