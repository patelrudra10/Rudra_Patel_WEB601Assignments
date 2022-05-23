import { Component, Input, OnInit } from '@angular/core';
import {Content} from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent implements OnInit {
  @Input() char?: Content;
  static characterCount = 0;
  private characters: Content[];

  constructor() {
    this.characters = []; 
  }
  get character():Content[] {
    return this.characters;
  }
  mychardetails(){
    console.log(this.char?.id);
    console.log(this.char?.author);
  }
  ngOnInit(): void {
  }

}
