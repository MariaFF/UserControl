import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-modal-cadastro-pessoa',
  templateUrl: 'modal-cadastro-pessoa.html'
})
export class ModalCadastroPessoaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Modal');
  }

}
