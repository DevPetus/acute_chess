import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BoardComponent, MenuComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedWindow: string = 'board';


  changeWindow(window: string) {
    this.selectedWindow = window;
  }
}
