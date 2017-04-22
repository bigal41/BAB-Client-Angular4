import {Component} from '@angular/core';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor( private _authService :AuthService ){ }

  login() {
    this._authService.login(this.username, this.password).subscribe( data => console.log(data),
                                                                     err => console.log(err),
                                                                     () => { }  );
  }

}
