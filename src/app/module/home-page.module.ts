import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../Model/home-page/home-page.component';
import { LoginComponent } from '../Model/login/login.component';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
