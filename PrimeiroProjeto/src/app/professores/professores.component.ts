import { Professor } from './../Models/Professor';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {


  public titulo = 'Professores';
  public professorSelecionado: Professor;
  public professorForm: FormGroup;
  public modalRef: BsModalRef;

  public professores = [
    {id: 1 , nome: 'Luiz' , disciplina: 'Delphi' },
    {id: 2 , nome: 'Ralf' , disciplina: 'C#' },
    {id: 3 , nome: 'Michel' , disciplina: 'Java' },
    {id: 4 , nome: 'Pedro' , disciplina: 'Banco de Dados' },

  ];
  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) {

    this.criarForm();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  criarForm(){
    this.professorForm = this.formBuilder.group({
      nome: ['',Validators.required],
      disciplina: ['',Validators.required],

    });
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }

  profesorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null;
  }
  ngOnInit() {
  }

}
