import { Component, OnInit } from '@angular/core';

import {IsLoggedInService} from '../is-logged-in.service';
// tslint:disable-next-line:import-spacing
import{ApiGatewayService} from '../api-gateway.service';


import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  first_name: any = '';
  email: any = '';
  password: any = '';
  password_confirmation: any = '';

  value: any = false;
  constructor(private isLoggedIn: IsLoggedInService, private apiGateway: ApiGatewayService, private router: Router) { }

  ngOnInit() {
  }

  onclick() {

    if ((this.first_name !== '') && (this.password !== '') && (this.email !== '') && (this.password_confirmation !== '')) {
      if (this.password_confirmation === this.password) {
           // tslint:disable-next-line:max-line-length
           this.apiGateway.fetchApipost('http://localhost:3000/register', {name: this.first_name, email: this.email, password: this.password}).subscribe((res: any) => {
          this. value = res.id;
          console.log(' Registered list update ');
          console.log(res);

          if (!this.value) {
              this.isLoggedIn.didLogin = true;
              console.log('logged in as  ' + this.first_name);
              this.router.navigate(['/home']);
          } else {
            alert('User already exists!');
          }
             });
      } else {
        alert('Password Incorrect!');
      }

    } else {
this.isLoggedIn.didLogin = false;
alert('Fill details!');
}

}


}
