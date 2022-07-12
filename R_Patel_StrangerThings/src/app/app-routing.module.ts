import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ContentDetailsComponent } from './content-details/content-details.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SearchComponent } from './search/search.component';
import { InvalidComponent } from './invalid/invalid.component';
import { ChangeContentComponent } from './change-content/change-content.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id",
    component: ContentDetailsComponent,
  },
  {
    path: "search",
    component: SearchComponent,
  },
  {
    path: "**",
    component: InvalidComponent
  },
  {
    path: "addContent",
    component: ChangeContentComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
