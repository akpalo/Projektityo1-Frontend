import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { KalenteriComponent } from './kalenteri/kalenteri.component';
import { AngCalendarComponent } from './ang-calendar/ang-calendar.component';
import { VarausComponent } from './varaus/varaus.component';

const routes: Routes = [
  { path: "kalenteri", component: KalenteriComponent},
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "angcalendar", component: AngCalendarComponent },
  { path: "varaus", component: VarausComponent },
  { path: '', redirectTo: '/angcalendar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
