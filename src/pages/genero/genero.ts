import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 -copyright
  Aluno:Gustavo Nakaura RA:816253667
 */

@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})
export class GeneroPage {
      
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroPage');
  }
}
