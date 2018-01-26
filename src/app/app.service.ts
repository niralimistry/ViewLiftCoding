import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('http://www.snagfilms.com/apis/films.json?limit=10');
  }

}
