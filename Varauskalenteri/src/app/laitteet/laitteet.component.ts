import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-laitteet',
  templateUrl: './laitteet.component.html',
  styleUrls: ['./laitteet.component.css']
})

export class LaitteetComponent {
   
  itemForm: FormGroup;
  itemLisays = false;
  
  // Konstruktoidaan formi uuden laitteen lisäystä varten
  constructor(private router: Router, private fb: FormBuilder, private itemService: ItemService) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  navigate() {
    this.router.navigate(['/angcalendar']);
  }

  // Uuden laitteen lisäys
  addItem() {

    // Haetaan tiedot formista
    const name = this.itemForm.get('name')?.value;
    const description = this.itemForm.get('description')?.value;
    
    console.log('Varauslomakkeen tiedot:', name, description);

    // Tallennetaan formin tiedot
    const newItemData = {
      name: name,
      description: description,
    };

    console.log("Lähetetään uuden laitteen tiedot tietokantaan: ", newItemData);

    // Lähetetään tiedot tietokantaan
    this.itemService.addItem(newItemData).subscribe({
      next: (response) => {
        console.log('Laitteen tiedot lähetetty backendille: ', response);
        // Tee jotain, kun varaus on lähetetty onnistuneesti
        this.itemLisays = true;
      },
      error: (error) => {
        console.error('Virhe laitteen lisäyksessä:', error);
        console.log(newItemData);
        // Tähän mitä tehdään, jos lisäyksen tekemisessä tulee virhe
      },
      complete: () => {
        console.log("Laite lisätty tietokantaan!");
        alert("Uusi laite lisätty!")
      }
    });
  }
};