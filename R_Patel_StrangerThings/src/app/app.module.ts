import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TypePipe } from './type.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { InvalidComponent } from './invalid/invalid.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    TypePipe,
    HighlightImportantDataDirective,
    ContentDetailsComponent,
    SearchComponent,
    InvalidComponent,
    NavigationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
