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

  public id: any;

  constructor() {
  }

}
