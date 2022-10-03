import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {NewsApiService} from "../services/news.api.service";
import {NewsAPIComponent} from "../components/news-apicomponent/news-a-p-i.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [RemoteEntryComponent, NewsAPIComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [NewsApiService],
})
export class RemoteEntryModule {}
