import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

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
}
