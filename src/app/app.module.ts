import { FormsModule } from '@angular/forms';

import { ClientesService } from './service/clientes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';
//firebase
import { environment } from './../environments/environment';
import{AngularFireModule}from'@angular/fire';
import{AngularFirestoreModule}from'@angular/fire/firestore';

import { FormComponent } from './componentes/form/form.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,

    FormComponent,
    MainNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configurarFIREBASE),
    FormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,


  ],
  providers: [ClientesService],
  bootstrap: [AppComponent],
  entryComponents:[FormComponent]
})
export class AppModule { }
