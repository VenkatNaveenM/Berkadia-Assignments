import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): any {
    return [{
      'name': 'Venkat Naveen M',
      'PinNo': '2210315762',
      'Section': 'Cse-B7',
      'Year': '4th Year'
      }, {
      'name': 'M Sanjeev Kumar',
      'PinNo': '2210315732',
      'Section': 'Cse-B7',
      'Year': '4th Year'
      }, {
      'name': 'Y Jaswanth',
      'PinNo': '2210315764',
      'Section': 'Cse-B7',
      'Year': '4th Year'
      }, {
      'name': 'K Vishnu Sudhamsh',
      'PinNo': '2210315729',
      'Section': 'Cse-B7',
      'Year': '4th Year'
      }, {
      'name': 'M Hrushikesh',
      'PinNo': '2210315432',
      'Section': 'Cse-B4',
      'Year': '4th Year'
      }, {
      'name': 'A Sanath Kumar',
      'PinNo': '2210415101',
      'Section': 'Civil-1',
      'Year': '4th Year'
      }
    ];
  }
  logged() {
    return localStorage.getItem('logged');
  }


}
