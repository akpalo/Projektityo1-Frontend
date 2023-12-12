import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = true
  title = 'Varauskalenteri';


  ngOnInit() {
    // Simuloi 2 sekunnin latauksen
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
