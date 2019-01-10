import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:import-spacing
import {ApiGatewayService} from '../api-gateway.service';
import {IsLoggedInService} from '../is-logged-in.service';

import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameEmail: any = '';
   password: any = '';
  done = false;
  value: any = 0;

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private apiGateway: ApiGatewayService, private isLoggedIn: IsLoggedInService) { }

  onclick() {

        if ((this.userNameEmail !== '') && (this.password !== '')) {

      // tslint:disable-next-line:max-line-length
      this.apiGateway.fetchApipost('http://localhost:3000', {userNameEmail: this.userNameEmail, password: this.password}).subscribe((res: any) => {
           this. value = res.id;

          if (this.value) {
            this.isLoggedIn.didLogin = true;
            console.log('logined as  ' + this.userNameEmail);
             this.router.navigate(['/home']);
          } else {
            alert(res.msg);
          }
             });

        } else {
    this.isLoggedIn.didLogin = false;
    alert('Fill details!');
  }

  }
  forRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {

    }

}
