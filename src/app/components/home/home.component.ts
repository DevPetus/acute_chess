import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoardComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
