import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';
import { Event } from 'src/app/Models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventservice:EventService) { }

  events:Event[]=[];
  newEvent:Event={} as Event;

  ngOnInit(): void {
    this.getEvents();
    }

  getEvents(): void {
    this.eventservice.getEvents().subscribe((response:Event[])=> {
      console.log(response);
      this.events=response;
    })
  }

  addEvent():void{
    this.eventservice.addEvent(this.newEvent).subscribe((response:Event)=>{
      console.log(response);
      this.getEvents();
    });
  }
}
