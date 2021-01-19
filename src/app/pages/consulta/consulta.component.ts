import { Component, OnInit } from '@angular/core';
import { Purchases } from '../../core/models/purchases.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CoinkService } from '../../core/services/coink.service';
import { ExcelService } from '../../core/services/excel.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})


export class ConsultaComponent implements OnInit {

  form: FormGroup;

  datos = [
    {value: 'name', viewValue: 'Nombre'},
    {value: 'cel', viewValue: 'Celular'},
    {value: 'email', viewValue: 'Email'},
    {value: 'fecha', viewValue: 'Fecha de compra'},
    {value: 'edad', viewValue: 'Edad'},
  ];

  
  displayedColumns: string[] = ['position', 'name', 'cel', 'email', 'fecha', 'edad' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
    constructor(private formBuilder: FormBuilder,
      private serviceCoink: CoinkService,
      private excelService: ExcelService) {
      this.buildForm();
     }
  
    ngOnInit(): void {
    }


    private buildForm() {
      this.form = this.formBuilder.group({
        fecha: ['', [Validators.required]],
        campo: ['', [Validators.required]],
        buscar: ['',[Validators.required]]
      });
    }

    enviar() {
      // console.log(this.form.value);

      if (this.form.valid) {
          console.log('entro');
          /*  
            this.serviceCoink.getBuscarPurchases('/pockets/reports/transactions/purchases', this.form.value)
                .subscribe(res => {
                    console.log('res', res)
                  }, err => {
                  console.log(err)
              }) 
          */
      }
       
    }

    limpiar() {
      this.form.patchValue({
        fecha : '',
        campo : '',
        buscar : ''
      })
    }

    exportarExcel() {
      // console.log('entroExcel');

      this.excelService.exportAsExcelFile(this.datos, 'Consulta');  
    }


}

export interface PeriodicElement {
  position: number;
  name: string;
  cel: number;
  email: string;
  fecha: string;
  edad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', cel: 1.0079, email: 'H', fecha: '20210117', edad: 18},
  {position: 2, name: 'Helium', cel: 4.0026, email: 'He', fecha: '20210117', edad: 18},
  {position: 3, name: 'Lithium', cel: 6.941, email: 'Li', fecha: '20210117', edad: 18},
  {position: 4, name: 'Beryllium', cel: 9.0122, email: 'Be', fecha: '20210117', edad: 18},
  {position: 5, name: 'Boron', cel: 10.811, email: 'B', fecha: '20210117', edad: 18},
  {position: 6, name: 'Carbon', cel: 12.0107, email: 'C', fecha: '20210117', edad: 18},
  {position: 7, name: 'Nitrogen', cel: 14.0067, email: 'N', fecha: '20210117', edad: 18},
  {position: 8, name: 'Oxygen', cel: 15.9994, email: 'O', fecha: '20210117', edad: 18},
  {position: 9, name: 'Fluorine', cel: 18.9984, email: 'F', fecha: '20210117', edad: 18},
  {position: 10, name: 'Neon', cel: 20.1797, email: 'Ne', fecha: '20210117', edad: 18},
  {position: 11, name: 'Sodium', cel: 22.9897, email: 'Na', fecha: '20210117', edad: 18},
  {position: 12, name: 'Magnesium', cel: 24.305, email: 'Mg', fecha: '20210117', edad: 18},
  {position: 13, name: 'Aluminum', cel: 26.9815, email: 'Al', fecha: '20210117', edad: 18},
  {position: 14, name: 'Silicon', cel: 28.0855, email: 'Si', fecha: '20210117', edad: 18},
  {position: 15, name: 'Phosphorus', cel: 30.9738, email: 'P', fecha: '20210117', edad: 18},
  {position: 16, name: 'Sulfur', cel: 32.065, email: 'S', fecha: '20210117', edad: 18},
  {position: 17, name: 'Chlorine', cel: 35.453, email: 'Cl', fecha: '20210117', edad: 18},
  {position: 18, name: 'Argon', cel: 39.948, email: 'Ar', fecha: '20210117', edad: 18},
  {position: 19, name: 'Potassium', cel: 39.0983, email: 'K', fecha: '20210117', edad: 18},
  {position: 20, name: 'Calcium', cel: 40.078, email: 'Ca', fecha: '20210117', edad: 18},
];
