import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-logintemplate',
  templateUrl: './logintemplate.component.html',
  styleUrls: ['./logintemplate.component.css']
})
export class LogintemplateComponent implements OnInit {

  form: FormGroup;
  

  @Input() page: string;

  // @Output() datos
  @Output() datos  = new EventEmitter();

  titulo: string;
  code: boolean = false;
  textingr: string;
  boton: string;
  clase: boolean;

  constructor(private formBuilder: FormBuilder,)
       {  this.buildForm(); }

  ngOnInit(): void {
    this.validarPagina(this.page);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      codigo: ['',[]]
    });
  }

  validarPagina(page) {
    if (page === 'Login') {
      this.code = false
      this.textingr = 'INGRESA A TU CUENTA'
      this.boton = 'INGRESAR'
    } else {
      this.code = true
      this.textingr = 'INGRESO SEGURO'
      this.boton = 'ENTRAR'
      this.clase = true
      this.form.controls['usuario'].clearValidators();
      this.form.controls['password'].clearValidators();
    }
    this.titulo = page
  }

  guardar() {
    console.log('EntroTemplate');
    if (this.form.valid) {
      this.datos.emit(this.form.value) 
      console.log('VálidoTemplate');
    }

  }

}
