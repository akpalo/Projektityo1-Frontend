import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { User } from '../api/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;

  registerForm: FormGroup;
  registerSuccess = false;

  // Konstruktoidaan formi, johon tallennetaan uuden käyttäjän tiedot
  constructor(private router: Router, private registerformbuilder: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.registerformbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      firstname: [''],
      lastname: ['']
    });
  }

  // Tallennetaan uuden käyttäjän tiedot formiin
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

    this.registerService.registerUser(registerData).subscribe({
      next: (response) => {
        console.log('Käyttäjä tiedot lähetetty backendille: ', response);
        // Tee jotain, kun varaus on lähetetty onnistuneesti
        this.registerSuccess = true;
      },
      error: (error) => {
        console.error('Virhe rekisteröinnissä:', error);
        console.log(registerData);
        // Tähän mitä tehdään, jos varauksen tekemisessä tulee virhe
      },
      complete: () => {
        console.log("Käyttäjä lisätty tietokantaan!");
      }
    });

    // Automaattinen navigointi takaisin login sivulle
    this.router.navigate(['/login']);

  }

  users: User[] = [];

  // Käyttäjien haku tietokannasta
  getUsers() {
    this.registerService.getUsers().subscribe({
      next: (response: User[]) => {
        console.log('Haetaan käyttäjiä');
        this.users = response; // Assign the response data to the property
      },
      error: (error) => {
        console.error('Virhe käyttäjien haussa:', error);
        // Tähän mitä tehdään, jos varauksien hakemisessa tulee virhe
      },
      complete: () => {
        console.log("Käyttäjät haettu onnistuneesti")
      }
    });
  }

}
