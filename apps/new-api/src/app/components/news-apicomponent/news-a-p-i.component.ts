import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../../services/news.api.service";

@Component({
  selector: 'lms-portal-mfe-news-api-component',
  templateUrl: './news-a-p-i.component.html',
  styleUrls: ['./news-a-p-i.component.scss'],
})
export class NewsAPIComponent implements OnInit {

  articles !: Array<never>;
  sources !: Array<never>;

  constructor(private newsAPI: NewsApiService) {}

  ngOnInit(): void {

    // @ts-ignore
    this.newsAPI.initArticles().subscribe(data => this.articles = data['articles']);

    // @ts-ignore
    this.newsAPI.initSources().subscribe( data => this.sources = data['sources'])
  }

  searchArticles(source: string){
    // @ts-ignore
    this.newsAPI.getArticlesByID(source).subscribe( data => this.articles = data['articles'])
  }
}
