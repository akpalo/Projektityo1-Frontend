import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { KalenteriComponent } from './kalenteri/kalenteri.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    KalenteriComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
