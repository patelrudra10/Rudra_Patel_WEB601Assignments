import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StrangerThingsService} from '../stranger-things.service';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {
 searchCharacter: Content[];

  constructor(private StrangerThingsService : StrangerThingsService) { 
    this.searchCharacter = [];
  }

  ngOnInit(): void { 
    this.StrangerThingsService.getchar().subscribe((contentArrayFromService: Content[]) => {
      this.searchCharacter = contentArrayFromService;
    });
  }

  searchCharacterById(id: any) {
    this.StrangerThingsService
      .getcharId(id)
  }
}