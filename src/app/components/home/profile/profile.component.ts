import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profileDescription: string = 'This is a profile description';
  editMode: boolean = false;

  ngOnInit(): void {
    //make http request for profile description
    //set profile description to the response
    //decode jwt token to get user name and role

  }

  onKey(event: any) {
    this.profileDescription = event.target.value;
    //make http request to update profile description

  }

  editFlip() {
    this.editMode = !this.editMode;
  }
}
