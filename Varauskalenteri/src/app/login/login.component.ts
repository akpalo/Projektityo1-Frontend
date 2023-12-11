import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login () {}

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/logout']);
  }
}
