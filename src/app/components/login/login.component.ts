import {Component} from '@angular/core';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  name: string;
  pokemonImg: string;
  url: string;

  constructor( private _authService :AuthService ){

    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if( currentUser != null )
      this.name = currentUser.user.name;

  }

  login() {
    this._authService.login(this.username, this.password).subscribe( data => console.log(data),
                                                                     err => console.log(err),
                                                                     () => { this.name = JSON.parse(sessionStorage.getItem('currentUser')).user.name; }  );
  }

  //TODO: Move to pokemon service.

  pokemonImage() {
    this._authService.pokemonImage().subscribe(
      data => {
        this.pokemonImg = data;
        this.url = 'data:image/png;base64,' + this.pokemonImg;
      },
      err => console.log(err),
      () => { }
    );
  }

  logout(){
    this._authService.logout();
    this.name = '';
  }

}
