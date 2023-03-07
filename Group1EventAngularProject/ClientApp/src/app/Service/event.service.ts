import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Models/event';
import { Favorites } from '../Models/favorites';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // events:Event[]=[];
  constructor(@Inject('BASE_URL') private baseUrl: string, private http:HttpClient) { }

  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseUrl}api/Event/Events`);
  }

  getFavorites():Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseUrl}api/Event/Favorites`);
  }

  addEvent(newEvent:Event):Observable<Event>{
    return this.http.post<Event>(`${this.baseUrl}api/Event?_category=${newEvent.category}&_name=${newEvent.name}&_date=${newEvent.date}&_location=${newEvent.location}`,{});
  }

  eventDetails(id:number):Observable<Event>{
    return this.http.get<Event>(`${this.baseUrl}api/Event/${id}`);
  }

  addFavorite(newFavorite:Favorites):Observable<Favorites>{
    return this.http.post<Favorites>(`${this.baseUrl}api/Event/addFavorite?_username=${newFavorite.username}&_eventsid=${newFavorite.eventsid}`,{});
  }
}
