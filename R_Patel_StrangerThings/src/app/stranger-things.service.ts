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

  getcharId(id: Number): Observable<Content[]> {
    var typechar = strangerthings.filter((char) => {
      console.log(char.id, id);
      return char.id == id;
    });
    console.log({ typechar });
    return of(typechar);
  }
  insertNewChar(newChar: Content): Observable<Content[]> {
    var typechar = strangerthings.filter((char) => {
      return char.id == newChar.id;
    });

    if (typechar.length == 0) {
      strangerthings.push(newChar);
    }return of(strangerthings);
  }

  updatechar(char: Content) {
    const updatedData = strangerthings.map((a) =>
      a.id === char.id ? { ...a, ...char } : a
    ); return updatedData;
  }

  deletechar(id: Number): Observable<Content[]> {
    var afterDelete = strangerthings.filter(function (char) {
      return char.id != id;
    });return of(afterDelete);
  }
}
