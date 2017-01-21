import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData () {
    this.http.get('/ninjas.json').map(
      (res) => res.json()
    ).subscribe(
      (data) => console.log(data)
    );
  }
}
