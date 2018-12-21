import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged: string;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('logged') === 'true') {
    this.logged = 'Logout';
    } else {
    this.logged = 'Login';
    }
  }

  logout() {
    localStorage.setItem('logged', 'false');
  }


  toggle(name: string, pass) {
    if (this.logged === 'Login' && name === 'Naveen' && pass === 'venkat')  {
      alert('Successfully Logged in');
      this.logged = 'Logout';
      localStorage.setItem('logged', 'true');
    } else if (this.logged === 'Login' && name === '' && pass === '') {
      alert('Enter Username and Password');
    } else {
      alert('Incorrect Password');
      this.logged = 'Login';
    }
  }
}
