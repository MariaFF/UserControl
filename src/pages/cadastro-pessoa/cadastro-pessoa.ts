import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {HomePage} from '../home/home';
import {ListUserPage} from '../list-user/list-user';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-cadastro-pessoa',
  templateUrl: 'cadastro-pessoa.html'
})
export class CadastroPessoaPage {

  private user;


  constructor(public navCtrl: NavController, public params: NavParams, public http:Http) {
    this.user={};


  }

  ionViewDidLoad() {

  }

  cancelar(){
    this.navCtrl.push(HomePage);
  }

  inserir(){
    console.log(this.user);
    //var url = 'http://localhost:8080/AtividadeAvaliativa/resource/user/inserir'
    this.http.post('http://localhost:8080/AtividadeAvaliativa/resource/user/inserir', this.user).map(res => res.json()).subscribe(data => {
    console.log('Salvo');
    });
  }
     //this.http.post('http://localhost:8080/AtividadeAvaliativa/resource/user/inserir', this.user).map(res => res.json()).subscribe(data => {
    //  console.log('Salvo');
    //  this.user = {};
    //     this.irParaLogin();

  irParaLogin(){
    this.navCtrl.pop();
  }
}
