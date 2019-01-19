import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  question: number;

  constructor( private readonly studentservice: StudentService) { }

  public all_questions;
  public question_correct;
  public question_data;
  public showdata;
  public correct = 0;

  ngOnInit() {
    this.studentservice.fetchquestiondata('http://localhost:9009/api/questions').subscribe((res: any) => {
    this.all_questions = res;
    console.log(this.all_questions);
  });
   }
   onSubmit(name: string) {
        console.log(name);
   }
  checkAnswers(que: string, index: string) {
    console.log(index);
    this.studentservice.fetchquestiondata('http://localhost:9009/api/questions' + index).subscribe((res: any) => {
      this.question_data = res;
      if (que === this.question_data) {
        this.correct += 1;
    }
  });
console.log(this.correct);
}
}
