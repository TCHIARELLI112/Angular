import { Aluno } from './../Models/Aluno';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunoSelecionado: Aluno;
  public alunoForm: FormGroup;
  public  modalRef: BsModalRef;


  public alunos = [
    {id: 1, nome: 'Diego', sobrenome: 'Cugick', telefone: 33334444},
    {id: 2, nome: 'Thiago', sobrenome: 'Chiarelli', telefone: 33334433},
    {id: 3, nome: 'Darlan', sobrenome: 'Silva', telefone: 33334422},
    {id: 4, nome: 'Gabriel', sobrenome: 'Jose', telefone: 33334411},
    {id: 5, nome: 'Bradlay', sobrenome: 'Magrão', telefone: 33334400},

  ];



  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) {

    this.criarForm();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  criarForm(){
    this.alunoForm = this.formBuilder.group({
      nome: ['',Validators.required],
      sobrenome: ['',Validators.required],
      telefone: ['',Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  ngOnInit() {
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }




}
