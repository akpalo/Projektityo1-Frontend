import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  logout() {}

  constructor(private router: Router) { }

  login() {
    this.router.navigate(['/login']);
  }

}
