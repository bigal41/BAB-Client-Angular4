import { Injectable }       from '@angular/core';
import { Http, Headers, RequestOptions, Response }   from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  //private _apiAddress = "https://ballaboveall.ralexclark.ca:8080/api";
  private _apiAddress = "http://localhost:8181/api"
  private  _token: string;
  private _options = {
    post: new RequestOptions({headers: new Headers({ 'Content-Type': 'application/json'})})
  }

  get token() { return this._token }

  constructor(private _http :Http){
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this._token = currentUser && currentUser.token;
  }

  login(username, password){
    return this._http.post( this._apiAddress + '/login', {username: username, password: password} ,this._options )
      .map((response: Response) => {

        let token = response.json() && response.json().token;
        let user = response.json() && response.json().user;

        if(token) {
           this._token = token;

           sessionStorage.setItem('currentUser', JSON.stringify({user: user, token: token}));

           return true;
        }
        else {
          return false;
        }
      })
  }

  logout():void{
    this._token = null;
    sessionStorage.removeItem('currentUser');
  }

  pokemonImage() {
    return this._http.get( this._apiAddress + '/pokemonimage')
      .map((response: Response) => {
        return response.text();
      })
  }

}
