import { Injectable } from '@angular/core';
import {Content} from '../app/models/content';
import {strangerthings} from '../app/data/mock-characters';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StrangerThingsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getchar(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/chess");
  }

  getContentItem(id: Number): Observable<Content> {
    /* for (var i = 0; i < strangerthings.length; i++) {
      if (strangerthings[i].id === id)
       {
        console.log(strangerthings[i])
        return of(strangerthings[i]);
      }
    }
    console.log(strangerthings)
    return of(strangerthings[i]);*/

    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/chess/" + id); 
  }
  addContentItem(newCharacter: Content): Observable<Content> {
    return this.http.post<Content>("/api/chess", newCharacter, this.httpOptions)
  }

  update(char: Content) {
    /*const update = strangerthings.map((a) =>
      a.id == char.id ? { a, char } : a
    ); */return this.http.put<any>("api/chess", char, this.httpOptions);
  }

  /*delete(id: Number): Observable<Content[]> {
    var afterDelete = strangerthings.filter(function (char) {
      return char.id != id;
    });return of(afterDelete);
  }*/
}
