import { Component, OnInit } from '@angular/core';
import { TrainService } from './train.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  train_string: string;
  route_number: number;
  constructor(private readonly trainservice: TrainService) { }
     // tslint:disable-next-line:max-line-length
     public train_data;
     public train_day;
     public train_check;
     public train_class;
     ngOnInit() { }
           searchTrain(train: string) {
            this.train_string = train;
            // tslint:disable-next-line:max-line-length
            this.trainservice.fetchtraindata('https://api.railwayapi.com/v2/name-number/train/' + this.train_string + '/apikey/dc8tr40oii/').subscribe((res: any) => {
                this.train_data = res.train;
          });
     }

     showTrain(trainname: string) {
      this.train_string = trainname;
      // tslint:disable-next-line:max-line-length
      this.trainservice.fetchtraindata('https://api.railwayapi.com/v2/name-number/train/' + this.train_string + '/apikey/dc8tr40oii/').subscribe((res: any) => {
          this.train_day = res.train;
    });
}

showTrainClass(trainclassname: string) {
  this.train_string = trainclassname;
  // tslint:disable-next-line:max-line-length
  this.trainservice.fetchtraindata('https://api.railwayapi.com/v2/name-number/train/' + this.train_string + '/apikey/dc8tr40oii/').subscribe((res: any) => {
      this.train_class = res.train;
});
}

     trainRoute(route: number) {
      this.route_number = route;
      // tslint:disable-next-line:max-line-length
      this.trainservice.fetchtraindata('https://api.railwayapi.com/v2/route/train/' + this.route_number + '/apikey/dc8tr40oii/').subscribe((result: any) => {
        this.train_check = result.route;
  });
     }
}
