import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';
import { Event } from 'src/app/Models/event';
import { Favorites } from 'src/app/Models/favorites'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventservice:EventService) { }

  events:Event[]=[];
  newEvent:Event={} as Event;
  favorites: Favorites[]=[];

  ngOnInit(): void {
    this.getEvents();
    this.getFavorites();
    }

  getEvents(): void {
    this.eventservice.getEvents().subscribe((response:Event[])=> {
      console.log(response);
      this.events=response;
    })
  }

  getFavorites(): void {
    this.eventservice.getFavorites().subscribe((response:Favorites[])=> {
      console.log(response);
      this.favorites=response;
    })
  }

  addEvent():void{
    this.eventservice.addEvent(this.newEvent).subscribe((response:Event)=>{
      console.log(response);
      this.getEvents();
    });
  }
}
