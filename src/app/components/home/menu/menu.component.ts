import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() emitter: EventEmitter<string>
    = new EventEmitter<string>();

  constructor(private authService: AuthService) { }

  changeWindow(window: string) {
    this.emitter.emit(window);
  }

  logout() {
    this.authService.logout();
  }
}
