import { Aluno } from './../Models/Aluno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunoSelecionado: Aluno;


  public alunos = [
    {id: 1, nome: 'Diego', sobrenome: 'Cugick', telefone: 33334455},
    {id: 2, nome: 'Thiago', sobrenome: 'Chiarelli', telefone: 33334455},
    {id: 3, nome: 'Darlan', sobrenome: 'Silva', telefone: 33334455},
    {id: 4, nome: 'Gabriel', sobrenome: 'Jose', telefone: 33334455},
    {id: 5, nome: 'Bradlay', sobrenome: 'Magrão', telefone: 33334455},

  ];


  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
  }

  voltar() {
    this.alunoSelecionado = null;
  }


  constructor() { }

  ngOnInit() {
  }

}
