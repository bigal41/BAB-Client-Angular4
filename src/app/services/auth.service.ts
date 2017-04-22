import { Injectable }       from '@angular/core';
import { Http, Headers, RequestOptions, Response }   from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private _apiAddress = "https://ballaboveall.ralexclark.ca:8080/api";
  private _options = {
    post: new RequestOptions({headers: new Headers({ 'Content-Type': 'application/json'})})
  }

  constructor(private _http :Http){}

  login(username, password){
    return this._http.post( this._apiAddress + '/login', {username: username, password: password} ,this._options ).map(res => res.json())
  }

}
