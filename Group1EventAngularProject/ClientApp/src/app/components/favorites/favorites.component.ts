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
    this.listFavorite();
  }

  getFavorites(): void {
    this.eventservice.getFavorites().subscribe((response:Event[])=> {
      console.log(response);
      this.favorites=response;
    })
  }

  removeFavorite(index:number): void {
    console.log(index)
      let findex=this.userfav.findIndex(f=> f.eventsId==this.favorites[index].id)
      console.log(findex)
      this.eventservice.removeFavorite(this.userfav[findex]).subscribe((response:Favorites)=> {
      console.log(response);
      this.userfav.splice(index,1)
      this.getFavorites();
    })
  } 

    listFavorite():void {
    this.eventservice.listFavorite().subscribe((response:Favorites[])=>{
      this.userfav=response;
      console.log(response);
    })
  }
  
}
