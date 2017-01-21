import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData () {
    this.http.get('/ninjas.json').subscribe(
      (data) => console.log(data)
    );
  }
}
