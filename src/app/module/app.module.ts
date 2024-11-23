import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../Model/home-page/home-page.component';
import { LoginComponent } from '../Model/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing/app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from './home-page.module';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
