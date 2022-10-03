import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class NewsApiService{

    private API_KEY : string = '6f8a999cbf014e9a9685cc200320c60d'

    constructor(private http: HttpClient) {

    }

    initSources(){
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.API_KEY);
    }

    initArticles(){
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.API_KEY);
    }

    getArticlesByID(source: String){
        return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.API_KEY);
    }
}