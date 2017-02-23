import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  santi: any[];

  constructor(public navCtrl: NavController) {
    this.santi = [];
    for(let i = 0; i < 10; i++){
      this.santi.push({nome: "Santo" + i, id: i})
    }
  }

  saintSelected(Santo) {
     alert("per oggi " + Santo.nome);
   }
}
