import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: boolean = false;

  constructor() { }

  login(data: { username: string, password: string }) {
    if (data.username === 'admin' && data.password === 'admin') {
      this.auth = true;
    } else { this.auth = false; }
    return of(this.auth);
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
