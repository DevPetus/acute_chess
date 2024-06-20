import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SafePipe } from '../../../pipe/safe.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule, MatInputModule, MatFormFieldModule],
  providers: [SafePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profileDescription: string = 'This is a profile description';
  editMode: boolean = false;

  // mock player list with name and ELO containing 50 players
  playerList = [
    { name: 'john_doe', elo: this.getRandomElo() },
    { name: 'jane_smith', elo: this.getRandomElo() },
    { name: 'alex_wilson', elo: this.getRandomElo() },
    { name: 'emma_jones', elo: this.getRandomElo() },
    { name: 'michael_brown', elo: this.getRandomElo() },
    { name: 'olivia_davis', elo: this.getRandomElo() },
    { name: 'william_taylor', elo: this.getRandomElo() },
    { name: 'sophia_thomas', elo: this.getRandomElo() },
    { name: 'james_anderson', elo: this.getRandomElo() },
    { name: 'ava_jackson', elo: this.getRandomElo() },
    { name: 'benjamin_martin', elo: this.getRandomElo() },
    { name: 'mia_lee', elo: this.getRandomElo() },
    { name: 'david_harris', elo: this.getRandomElo() },
    { name: 'amelia_clark', elo: this.getRandomElo() },
    { name: 'joseph_lewis', elo: this.getRandomElo() },
    { name: 'charlotte_hall', elo: this.getRandomElo() },
    { name: 'daniel_young', elo: this.getRandomElo() },
    { name: 'emily_ward', elo: this.getRandomElo() },
    { name: 'matthew_carter', elo: this.getRandomElo() },
    { name: 'ella_morris', elo: this.getRandomElo() },
    { name: 'samuel_rogers', elo: this.getRandomElo() },
    { name: 'grace_hughes', elo: this.getRandomElo() },
    { name: 'jackson_bell', elo: this.getRandomElo() },
    { name: 'scarlett_wright', elo: this.getRandomElo() },
    { name: 'aiden_hill', elo: this.getRandomElo() },
    { name: 'lily_mitchell', elo: this.getRandomElo() },
    { name: 'sebastian_turner', elo: this.getRandomElo() },
    { name: 'chloe_kelly', elo: this.getRandomElo() },
    { name: 'owen_cooper', elo: this.getRandomElo() },
    { name: 'zoey_wood', elo: this.getRandomElo() },
    { name: 'henry_ward', elo: this.getRandomElo() },
    { name: 'victoria_morgan', elo: this.getRandomElo() },
    { name: 'wyatt_phillips', elo: this.getRandomElo() },
    { name: 'henry_ward', elo: this.getRandomElo() },
    { name: 'victoria_morgan', elo: this.getRandomElo() },
    { name: 'lucas_roberts', elo: this.getRandomElo() },
    { name: 'grace_hill', elo: this.getRandomElo() },
    { name: 'ethan_turner', elo: this.getRandomElo() },
    { name: 'aubrey_cook', elo: this.getRandomElo() },
    { name: 'carter_hughes', elo: this.getRandomElo() }];

  constructor(private safePipe: SafePipe) { }

  ngOnInit(): void {
    //make http request for profile description
    //set profile description to the response
    //decode jwt token to get user name and role
    this.sortByElo();
  }

  onKey(event: any) {
    this.profileDescription = event.target.value;
    //@TODO : make http request to update profile description

  }

  getRandomElo() {
    return Math.floor(Math.random() * 2000) + 1000;
  }

  sortByElo() {
    this.playerList.sort((a, b) => b.elo - a.elo);
  }

  editFlip() {
    this.editMode = !this.editMode;
    this.profileDescription = this.safePipe.transform(this.profileDescription);
    this.profileDescription = this.profileDescription.replace(/&#10;/g, "");
  }
}
