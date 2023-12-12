import { Component } from '@angular/core';

interface Laite {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-varaa-laite',
  templateUrl: './varaa-laite.component.html',
  styleUrls: ['./varaa-laite.component.css']
})
export class VaraaLaiteComponent {

  laitteet: Laite[] = [
    {value: 'laite-0', viewValue: 'Kamera'},
    {value: 'laite-1', viewValue: 'Valo'},
    {value: 'laite-2', viewValue: 'Green screen'},
  ];

  /*
  toggle_kalenteri() {
    
  }

  varaa() {

  }
  */

}
