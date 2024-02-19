import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AngCalendarComponent } from './ang-calendar/ang-calendar.component';
import { VarausComponent } from './varaus/varaus.component';
import { RegisterComponent } from './register/register.component';
import { LaitteetComponent } from './laitteet/laitteet.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "angcalendar", component: AngCalendarComponent },
  { path: "varaus", component: VarausComponent },
  { path: "register", component: RegisterComponent },
  { path: "laitteet", component: LaitteetComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }