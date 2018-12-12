import { Component } from '@angular/core';
import { DependencyService } from './dependency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataset = [];
  constructor(private readonly data: DependencyService){}
  showData() {
    this.dataset = this.data.getData();
  }
  addData(studentname, pinno, section, year) {
    this.dataset.push({'name': studentname, 'PinNo' : pinno , 'Section' : section , 'Year' : year });
  }

}