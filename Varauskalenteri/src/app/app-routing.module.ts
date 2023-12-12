import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { VaraaLaiteComponent } from './varaa-laite/varaa-laite.component';
import { KalenteriComponent } from './kalenteri/kalenteri.component';

const routes: Routes = [
  {path: "kalenteri", component: KalenteriComponent},
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "varaa", component: VaraaLaiteComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
