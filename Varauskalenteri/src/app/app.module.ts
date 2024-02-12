import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { KalenteriComponent } from './kalenteri/kalenteri.component';
import { LoadingComponent } from './loading/loading.component';
import { AngCalendarComponent } from './ang-calendar/ang-calendar.component';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReservationService } from './services/reservation.service';
import { ApplicationConfig } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api/api.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    LoadingComponent,
    KalenteriComponent,
    AngCalendarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    JsonPipe,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:7142/api' })


  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fi-FI' }, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
