import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Käyttäjän oikea puhelinnumero
  private correctPhoneNumber = '12345'; //MUISTIO ITSELLE: TEE TÄHÄN AUTH SERVICE UUSIA NUMEROITA VARTEN
  @ViewChild('loginForm') loginForm: NgForm | undefined;
  

  // Injektoi Router
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  login() {
    // Tarkista, onko syötetty puhelinnumero oikea
    if (this.loginForm && this.loginForm.value.phoneNumber === this.correctPhoneNumber) {
      // Kirjautuminen onnistui, voit suorittaa haluamasi toimenpiteet täällä
      console.log('Kirjautuminen onnistui');
      this.showSuccessMessage('Kirjautuminen onnistui'); // Näytä onnistunut kirjautumisilmoitus
      // Ohjaa käyttäjä haluamallesi sivulle
      this.router.navigate(['/angcalendar']);
    } else {
      // Kirjautuminen epäonnistui, voit esimerkiksi näyttää virheilmoituksen
      console.log('Kirjautuminen epäonnistui');
      this.showFailureMessage('Kirjautuminen epäonnistui'); // Näytä epäonnistunut kirjautumisilmoitus

    }
  }

  // Viesti onnistuneesta sisäänkirjautumisesta
  private showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  // Viesti epäonnistuneesta sisäänkirjautumisesta
  private showFailureMessage(message: string): void {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['failure-snackbar'], // Lisää mukautettu CSS-luokka
    });
  }

  // Rekisteröitymis sivulle navigointi
  navigate() {
    this.router.navigate(['/register']);
  }

}
