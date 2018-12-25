import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private readonly http: HttpClient) { }

  fetchtraindata(apiURL: string) {
    // apiURL = (apiURL) ? apiURL : 'myURL'; If not mandatory
        return this.http.get(apiURL);
  }
}
