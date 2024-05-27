import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements AfterViewInit {

  board = document.getElementById('board');


  ngAfterViewInit(): void {
    if (this.board) {

      this.board.scrollIntoView({ behavior: 'smooth' });
    }
    else (console.log('board not found'))
  }

}
