import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements AfterViewInit {

  board = document.getElementById('board');


  ngAfterViewInit(): void {
    if (this.board) {

      this.board.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      this.board = null;
      console.log('board not found');
    }
  }

}
