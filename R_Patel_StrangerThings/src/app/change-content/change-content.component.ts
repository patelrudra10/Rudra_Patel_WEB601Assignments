import { Component, OnInit } from '@angular/core';
import { StrangerThingsService } from '../stranger-things.service';
import { Content } from '../models/content';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.css']
})
export class ChangeContentComponent implements OnInit {

  contentItem: Content = {
    title: "",
    body: "",
    id: null,
    author: '',
    type:'',
    hashtag: []
  };
  tempTags: string = '';
  constructor(private StrangerThingsService: StrangerThingsService ) { }


  ngOnInit(): void {
  }

  addContentToServer(): void {
    this.contentItem.hashtag = this.tempTags.split(", ");
    this.StrangerThingsService.addContentItem(this.contentItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }
  updateContentOnServer(): void {
    this.contentItem.hashtag = this.tempTags.split(", ");
    this.StrangerThingsService.update(this.contentItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.contentItem)
      );
  }

}
