import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';
import { Event } from 'src/app/Models/event';
import { Favorites } from 'src/app/Models/favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private eventservice:EventService) { }
  favorites: Event[]=[];
  userfav: Favorites[]=[];

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.eventservice.getFavorites().subscribe((response:Event[])=> {
      console.log(response);
      this.favorites=response;
    })
  }
}
