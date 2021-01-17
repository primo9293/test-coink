import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pagina: string = 'Login';

  data: any

  constructor(private router: Router)
       {  }

  ngOnInit(): void {
  }

  getData(event) {
    console.log('getDataLogin');
    console.log('event', event);
    this.router.navigate(['/validacion']);
  }

}
