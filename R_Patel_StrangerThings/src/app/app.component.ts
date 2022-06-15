import { Component} from '@angular/core';
import {Content} from './models/content';
import {StrangerThingsService} from './stranger-things.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'R_Patel_StrangerThings';
  searchCharacter: Content[];

  public id: any;
  constructor(private characterService: StrangerThingsService) {
    this.searchCharacter = [];
  }
  ngOnInit(): void {}

  searchCharacterById(id: any) {
    console.log({ id, type: typeof id });
    this.characterService
      .getcharId(id)
      .subscribe((movies) => (this.searchCharacter = movies));

      console.log({ id, type: typeof id, searchCharacter: this.searchCharacter });
  }
  }
