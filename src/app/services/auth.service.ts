import { Injectable } from '@angular/core';

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

  get isAuth(): boolean {
    return this.auth;
  }
}
