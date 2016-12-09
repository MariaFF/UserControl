import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html'
})
export class ListUserPage {
  private listUsers = [];
  private find;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http:Http) {
    this.listUsers = [];
    this.listar();
    this.find = '';
  }

  ionViewDidLoad() {
    console.log('Hello ListUserPage Page');
  }

  abrirDialog() {
    let alert = this.alertCtrl.create({
      title: 'Usuário',
      subTitle: 'Aqui as informações do usuário!',
      buttons: ['OK']
    });
    alert.present();
  }
  listar(){
      this.http.get('http://localhost:8080/userControl/resource/usuario/listar').map(res => res.json()).subscribe(data => {
        this.listUsers = data;
      });
    }

   searchByEmail(){
    console.log(this.find);
    this.http.get('http://localhost:8080/userControl/resource/usuario/buscarPorEmail/'+this.find).map(res => res.json()).subscribe(data => {
      this.listUsers = data;
    });
  }

    searchByName(){
    console.log(this.find);
    this.http.get('http://localhost:8080/userControl/resource/usuario/buscarPorNome/'+this.find).map(res => res.json()).subscribe(data => {
      this.listUsers = data;
    });
    }
}
