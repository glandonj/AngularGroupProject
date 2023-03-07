import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/Service/event.service';
import { Event } from 'src/app/Models/event';
import { Favorites } from 'src/app/Models/favorites';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  

  constructor(private route:ActivatedRoute, private eventService:EventService) { }
  events:Event[]=[];
  result:Event = {} as Event;
  newFavorite:Favorites={} as Favorites;

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    console.log(id);

    this.eventService.eventDetails(id).subscribe((response:Event)=>{
      this.result =response;
    });
  }

  addFavorite():void{
    this.newFavorite.eventsId = this.result.id;
    this.eventService.addFavorite(this.newFavorite).subscribe((response:Favorites)=>{
      console.log(response);
    });
  }

}
