import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  authenticationState = new BehaviorSubject((localStorage.getItem("login")?true:false))
  constructor() { }
  authenticate(){
    localStorage.setItem("login","true")
    this.authenticationState.next(true)
  }
  isAuthenticate(){
    return this.authenticationState;
  }
  isAuthenticated(){
    return this.authenticationState.value;
  }
  logout(){
    localStorage.removeItem("login")
    this.authenticationState.next(false)
  }
}
