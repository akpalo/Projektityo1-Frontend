import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  hide = true;

  registerForm: FormGroup;
  registerSuccess = false;

  constructor(private router: Router, private registerformbuilder: FormBuilder) {
    this.registerForm = this.registerformbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      firstname: [''],
      lastname: ['']
    });
  }

  register() {
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;
    const phone = this.registerForm.get('phone')?.value;
    const firstname = this.registerForm.get('firstname')?.value;
    const lastname = this.registerForm.get('lastname')?.value;

    console.log('Varauslomakkeen tiedot:', username, password, phone, firstname, lastname);

    const registerData = {
      username: username,
      password: password,
      phone: phone,
      firstname: firstname,
      lastname: lastname
    };

    console.log("Lähetetään käyttäjätiedot tietokantaan: ", registerData);

  }

}
