import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CadastroPessoaPage} from '../pages/cadastro-pessoa/cadastro-pessoa';
import {ListUserPage} from '../pages/list-user/list-user';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPessoaPage,
    ListUserPage


  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPessoaPage,
    ListUserPage

  ],
  providers: []
})
export class AppModule {}
