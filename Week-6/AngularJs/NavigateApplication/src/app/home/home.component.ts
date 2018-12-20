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


  toggle(name: string, pass) {
    if (this.logged === 'Login' && name === 'Naveen' && pass === 'venkat')  {
      this.logged = 'Logout';
      localStorage.setItem('logged', 'true');
    } else if (this.logged === 'Login' && name === '' && pass === '') {
      alert('Enter Username and Password');
    } else {
      alert('Incorrect Password');
      this.logged = 'Login';
      localStorage.setItem('logged', 'false');
    }
  }
}
