import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../models/content';
import {StrangerThingsService} from '../stranger-things.service';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {
  id?: number;
  char?: Content;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private StrangerThingsService: StrangerThingsService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the + unary operator

      this.StrangerThingsService.getContentItem(this.id).subscribe(singleItem => {
        if (singleItem) {
          this.char = singleItem;
        }
        else {
          this.router.navigate(['/contentNotFound']);
        }
      });
    });
  }

}