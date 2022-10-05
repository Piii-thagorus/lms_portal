import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../../services/news.api.service";
import {Categories} from "./categories";

@Component({
  selector: 'lms-portal-mfe-news-api-component',
  templateUrl: './news-a-p-i.component.html',
  styleUrls: ['./news-a-p-i.component.scss'],
})
export class NewsAPIComponent implements OnInit {

  articles !: [];

  sources !: [];

  slidesPerGrid : number
  categories = Object.values(Categories)

  categoryMapArticle : {category: string, articles: []}[]= [];

  constructor(private newsAPI: NewsApiService) {

    this.slidesPerGrid = 4
    this.initCategoryObjects()

  }

  ngOnInit(): void {

   this.newsAPI.initArticles().subscribe(data => this.articles = data['articles']);

    this.newsAPI.initSources().subscribe( data => this.sources = data['sources'])
  }

  searchArticles(source: string){
    this.newsAPI.getArticlesByID(source).subscribe( data => this.articles = data['articles'])
  }

  initCategoryObjects()  {


    this.categories.forEach((category) =>{
      this.newsAPI.getArticlesByCategory(category).
                subscribe(data =>
          this.categoryMapArticle.push({category: category, articles: data['articles']})
      )
    })
  }

  getTotalSlidesPerGrid(slides : []) : number {



    return this.slidesPerGrid
  }
}
