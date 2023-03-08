import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';
import { Event } from 'src/app/Models/event';
import { Favorites } from 'src/app/Models/favorites';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventservice:EventService) { }

  events:Event[]=[];
  newEvent:Event={} as Event;
  newFavorite:Favorites={} as Favorites;
  AddEvent:boolean=false;
  eventConfirm:boolean=false;
  edate:Date={} as Date;
  etime:Date={} as Date;


  ngOnInit(): void {
    this.getEvents();
    }

  getEvents(): void {
    this.eventservice.getEvents().subscribe((response:Event[])=> {
      console.log(response);
      this.events=response;
    })
  }

  toggleAdd():void{
    this.AddEvent =!this.AddEvent;
  }

  toggleConfirm():void{
    this.eventConfirm =!this.eventConfirm;
  }

  addEvent():void{
    let combinedDate:string=this.edate.toString()+"T"+this.etime.toString()+":00.000";
    console.log(combinedDate);
    this.newEvent.date=new Date(combinedDate);
    console.log(this.newEvent.date);
    this.eventservice.addEvent(this.newEvent).subscribe((response:Event)=>{
      console.log(response);
      this.getEvents();      
    });
  }
  addFavorite():void{
    this.eventservice.addFavorite(this.newFavorite).subscribe((response:Favorites)=>{
      console.log(response);
      this.getEvents();

    });
  }

}
