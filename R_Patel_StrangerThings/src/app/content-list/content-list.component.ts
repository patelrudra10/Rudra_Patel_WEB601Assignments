import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import {StrangerThingsService} from '../stranger-things.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  strangerthings:Content[];
  types: string[] = ["", "IM", "FM", "GM"];
  authorSearchMessage = {
    message: "",
    found: false
  };

  constructor(private strangerthingsService: StrangerThingsService) { 
    this.strangerthings = [];
  }
  
  value = '';
  getValue(input:string)
  {
    let inputBox = (<HTMLInputElement>document.querySelector('input'));
    this.strangerthings.forEach(e => {
      if(e.author === input)
      {
        this.value = `Content item exists with the Author ${input}`
        inputBox.style.color = "blue";
        return  this.value;
        
      }
      else
      {
        this.value = `Content item doesn't exists with the Author ${input}`;
        inputBox.style.color = "gray";
        return  this.value;
      }
    })
  }

  ngOnInit(): void 
  {
    this.strangerthingsService
      .getchar()
      .subscribe((characters) => (this.strangerthings = characters));
  }
  checkForAuthorInList(authorNameValue: string): void {
    if (this.strangerthings.some(player => player.author === authorNameValue)) {
      this.authorSearchMessage.message = "Author Found";
      this.authorSearchMessage.found = true;
    }
    else {
      this.authorSearchMessage.message = "Author Not Found";
      this.authorSearchMessage.found = false;
    }
  }

}
  
   

  

  
