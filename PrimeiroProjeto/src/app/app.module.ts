import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './Alunos/Alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@Angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
   declarations: [
      AppComponent,
      AlunosComponent,
      ProfessoresComponent,
      DashboardComponent,
      PerfilComponent,
      NavComponent,
      TituloComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      ModalModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
