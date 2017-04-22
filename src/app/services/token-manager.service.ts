import {Injectable} from '@angular/core';

@Injectable()
export class TokenManager {

  private tokenKey:string = 'token';

  store(content:Object) {
    localStorage.setItem(this.tokenKey, content['token']);
  }

  private 

}
