import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresoseguro',
  templateUrl: './ingresoseguro.component.html',
  styleUrls: ['./ingresoseguro.component.css']
})
export class IngresoseguroComponent implements OnInit {

  pagina: string = 'IngresoSeguro';

  data: any

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validarCodigo(event) {
    console.log('validarCodigoIngreso');
    console.log('event', event);
    this.router.navigate(['/consulta']);
  }

}
