import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

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

  constructor() { 
    this.strangerthings = [{
      id: 0,
      title: 'Eleven(Jane)',
      body: 'Eleven, born Jane Ives and legally named Jane Hopper, is a fictional character of the Netflix science fiction horror drama series Stranger Things, written and produced by the Duffer Brothers.',
      author: 'Duffer Brothers',
      imageLink: 'https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:683109?height=851&width=1512&format=jpg&quality=.7',
      type: 'Superhuman',
      hashtag: ['Eleven']
    },
    {
      id: 1,
      title: 'Mike',
      body: 'Michael "Mike" Wheeler, portrayed by Finn Wolfhard, is one of the main protagonists of Stranger Things.',
      author: 'Duffer Brothers',
      imageLink: 'https://www.hollywoodreporter.com/wp-content/uploads/2019/07/gettyimages-1156170922_copy.jpg?w=681&h=383&crop=1',
      type: 'Human',
      hashtag: ['Leader']
    },
    {
      id: 2,
      title: 'Will',
      body: 'William Byers is a fictional character from the American science fiction horror drama television series Stranger Things',
      author: 'Duffer Brothers',
      imageLink: 'https://uploads.dailydot.com/2019/07/will-stranger-things.png?auto=compress&fit=scale&fm=png&h=350&w=642',
      type: 'Human',
      hashtag: ['Willy']
    },
    {
      id: 3,
      title: 'Max',
      body: 'Maxine "Max" Mayfield, portrayed by Sadie Sink, is a main character of the Netflix series Stranger Things. A newcomer to the Party.',
      author: 'Duffer Brothers',
      imageLink: 'https://www.nme.com/wp-content/uploads/2019/07/Stranger_Things_S03E01_33m27s48135f_R-696x442.jpg',
      type: 'Human',
      hashtag: ['Maxine']
    },
    {
      id: 4,
      title: 'Steve',
      body: 'Steve Harrington is a fictional character from the Netflix television show Stranger Things, portrayed by Joe Keery.',
      author: 'Duffer Brothers',
      imageLink: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/05/joe-keery-as-steve-harrington-stranger-things.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
      type: 'Human',
      hashtag: ['Steven']
    },
    {
      id: 5,
      title: 'Dustin',
      body: 'Dustin Henderson, portrayed by Gaten Matarazzo, is one of the main protagonists of Stranger Things.',
      author: 'Duffer Brothers',
      imageLink: 'https://i.insider.com/5e4ecd2681a9aa7bc13f78b6?width=1000&format=jpeg&auto=webp',
      type: '',
      hashtag: ['Steven']
    },
    {
      id: 6,
      title: 'Nancy',
      body: 'Nancy Wheeler is a fictional character from the Netflix television show Stranger Things, portrayed by Natalia Dyer.',
      author: 'Duffer Brothers',
      imageLink: 'https://www.hleatherjackets.com/wp-content/uploads/2019/07/26.jpg',
      type: '',
      hashtag: ['Nance']
    }
    ]
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

  ngOnInit(): void {
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
