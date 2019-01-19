import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private readonly http: HttpClient) { }

  fetchquestiondata(apiURL: string) {
        return this.http.get(apiURL);
  }
}
