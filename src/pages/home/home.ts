import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import {CadastroPessoaPage} from '../cadastro-pessoa/cadastro-pessoa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user;

  constructor(public navCtrl: NavController, public http:Http) {

  }

  logar(){
  console.log("Logar");
  this.http.post('http://localhost:8080/AtividadeAvaliativa/resource/user/logar', this.user).map(res => res.json()).subscribe(data => {
    this.redirecionar();
      if (data != false) {
        console.log('Login');
      //this.chamarList();
      } else {
          console.log('nao encontrado')
      }
  });
}



redirecionar(){
  this.navCtrl.push(CadastroPessoaPage);
  console.log("Redirecionar");
}




}
