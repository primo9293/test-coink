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
  nofound: boolean;

  constructor(private formBuilder: FormBuilder,)
       {  this.buildForm(); }

  ngOnInit(): void {
    this.validarPagina(this.page);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      user_mail: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      user_password: ['', [Validators.required, Validators.minLength(8)]],
      codigo: ['',[]]
    });
  }

  get correoNoValido(){
    return this.form.get('user_mail');
  }

  get passField() {
    return this.form.get('user_password');
  }

  get codigoField() {
    return this.form.get('codigo');
  }


  /*   
  get passNoValido(){
    return this.form.get('user_password').invalid;
  } 
  */

  validarPagina(page) {
    if (page === 'Login') {
      this.code = false
      this.textingr = 'INGRESA A TU CUENTA'
      this.boton = 'INGRESAR'
    } 
    if (page === '404') {
      this.nofound = true
      this.form.controls['user_mail'].clearValidators();
      this.form.controls['user_password'].clearValidators();
      this.form.controls['codigo'].clearValidators();
    }
    if (page === 'IngresoSeguro') {
      this.code = true
      this.textingr = 'INGRESO SEGURO'
      this.boton = 'ENTRAR'
      this.clase = true
      this.form.controls['user_mail'].clearValidators();
      this.form.controls['user_password'].clearValidators();
      this.form.controls['codigo'].setValidators([Validators.required, Validators.minLength(4)]);
    }
    this.titulo = page
  }

  guardar() {
    if (this.form.valid) {
      this.datos.emit(this.form.value) 
      // console.log('VálidoTemplate');
    }

  }

}
