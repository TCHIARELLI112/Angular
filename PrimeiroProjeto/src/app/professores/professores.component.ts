import { Professor } from './../Models/Professor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {


  public titulo = 'Professores';
  public professorSelecionado: Professor;

  public professores = [
    {id: 1 , nome: 'Luiz' , disciplina: 'Delphi' },
    {id: 2 , nome: 'Ralf' , disciplina: 'C#' },
    {id: 3 , nome: 'Michel' , disciplina: 'Java' },
    {id: 4 , nome: 'Pedro' , disciplina: 'Banco de Dados' },

  ];
  constructor() { }

  profesorSelect(professor: Professor){
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null;
  }
  ngOnInit() {
  }

}
