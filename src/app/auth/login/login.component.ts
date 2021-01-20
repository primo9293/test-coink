import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinkService } from '../../core/services/coink.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pagina: string = 'Login';

  data: any

  constructor(private router: Router,
              private serviceCoink: CoinkService)
       {  }

  ngOnInit(): void {
  }

  getData(event) {
    console.log(event);
    const {user_mail, user_password} = event

    this.serviceCoink.login('/login', {user_mail, user_password})
           .subscribe(res => {
              console.log('res', res)
              // this.router.navigate(['/validacion']);
            }, err => {
            console.log(err)
        })

    this.router.navigate(['/validacion']);
  }

}
