import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/Service/event.service';
import { Event } from 'src/app/Models/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  

  constructor(private route:ActivatedRoute, private eventService:EventService) { }
  events:Event[]=[];
  result:Event = {} as Event;

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    console.log(id);

    this.eventService.eventDetails(id).subscribe((response:Event)=>{
      this.result =response;
    });
  }

}
