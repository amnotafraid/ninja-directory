import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
  return this.http.get('https://nn-angular-3f5e8.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }
}
