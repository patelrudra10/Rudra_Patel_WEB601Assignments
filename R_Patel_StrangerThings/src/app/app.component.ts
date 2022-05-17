import { Component } from '@angular/core';
import {Content} from './models/content';
import {List} from './models/list'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'R_Patel_StrangerThings';

  Author = 'Rudra Patel';

  first: Content;
  second: Content;
  third: Content;
  fourth: Content;
  
  listOfContent: List = new List;

  constructor() {
    this.first = {
      id: 0,
      title: 'Eleven(Jane)',
      body: 'Eleven, born Jane Ives and legally named Jane Hopper, is a fictional character of the Netflix science fiction horror drama series Stranger Things, written and produced by the Duffer Brothers.',
      author: 'Duffer Brothers',
      imageLink: 'https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:683109?height=851&width=1512&format=jpg&quality=.7',
      type: 'Superhuman',
      hashtag: ['Eleven']
    }

    this.second = {
      id: 1,
      title: 'Mike',
      body: 'Michael "Mike" Wheeler, portrayed by Finn Wolfhard, is one of the main protagonists of Stranger Things.',
      author: 'Duffer Brothers',
      imageLink: 'https://www.hollywoodreporter.com/wp-content/uploads/2019/07/gettyimages-1156170922_copy.jpg?w=681&h=383&crop=1',
      type: 'Boy',
      hashtag: ['Leader']
    }

    this.third = {
      id: 2,
      title: 'Will',
      body: 'William Byers is a fictional character from the American science fiction horror drama television series Stranger Things',
      author: 'Duffer Brothers',
      imageLink: 'https://uploads.dailydot.com/2019/07/will-stranger-things.png?auto=compress&fit=scale&fm=png&h=350&w=642',
      type: 'Boy',
      hashtag: ['Willy']
    }

    this.fourth = {
      id: 3,
      title: 'Max',
      body: 'Maxine "Max" Mayfield, portrayed by Sadie Sink, is a main character of the Netflix series Stranger Things. A newcomer to the Party.',
      author: 'Duffer Brothers',
      imageLink: 'https://www.nme.com/wp-content/uploads/2019/07/Stranger_Things_S03E01_33m27s48135f_R-696x442.jpg',
      type: 'Girl',
      hashtag: ['Maxine']
    }
        this.listOfContent.addcontent(this.first);
        this.listOfContent.addcontent(this.second);
        this.listOfContent.addcontent(this.third);
        this.listOfContent.addcontent(this.fourth);
  }

}