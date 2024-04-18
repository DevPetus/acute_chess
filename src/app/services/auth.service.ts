import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: boolean = false;

  constructor() { }

  login() {
    this.auth = true;
  }

  logout() {
    this.auth = false;
  }

  register(data: object) {
    return of("we tkt");
  }

  get isAuth(): boolean {
    return this.auth;
  }
}
