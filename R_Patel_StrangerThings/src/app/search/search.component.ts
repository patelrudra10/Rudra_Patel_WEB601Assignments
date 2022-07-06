import { Component, OnInit } from '@angular/core';
import {Content} from '../models/content';
import {StrangerThingsService} from '../stranger-things.service';
import {strangerthings} from '../data/mock-characters';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  item: Content | undefined;

  constructor(private StrangerThingsService: StrangerThingsService) { }

  ngOnInit(): void {}

  checkForIdInList(idValue: string): void {
    this.StrangerThingsService.getContentItem(Number(idValue)).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item AGAIN: ", chessChampionsSingleItem);
      this.item = chessChampionsSingleItem;
    });
  } 
}
