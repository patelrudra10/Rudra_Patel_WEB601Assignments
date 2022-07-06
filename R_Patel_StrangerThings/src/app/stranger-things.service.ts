import { Injectable } from '@angular/core';
import {Content} from '../app/models/content';
import {strangerthings} from '../app/data/mock-characters';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StrangerThingsService {

  constructor() { }
  getchar(): Observable<Content[]> {
    return of(strangerthings);
  }

  getContentItem(id: Number): Observable<Content> {
    for (var i = 0; i < strangerthings.length; i++) {
      if (strangerthings[i].id === id)
       {
        console.log(strangerthings[i])
        return of(strangerthings[i]);
      }
    }
    console.log(strangerthings)
    return of(strangerthings[i]);
  }

  update(char: Content) {
    const update = strangerthings.map((a) =>
      a.id == char.id ? { a, char } : a
    ); return update;
  }

  delete(id: Number): Observable<Content[]> {
    var afterDelete = strangerthings.filter(function (char) {
      return char.id != id;
    });return of(afterDelete);
  }
}
