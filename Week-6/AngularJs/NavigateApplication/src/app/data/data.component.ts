import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  dataset = [];
  constructor(private readonly data: DataService) {}
  showData() {
    this.dataset = this.data.getData();
  }
  addData(studentname, pinno, section, year) {
    this.dataset.push({'name': studentname, 'PinNo' : pinno , 'Section' : section , 'Year' : year });
  }

}
