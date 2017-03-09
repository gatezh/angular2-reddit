import { Component, OnInit, Input } from '@angular/core';
import { Article } from "./article.model";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: { class: "row" }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10)
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false; // to avoid page reload
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false; // to avoid page reload
  }

  ngOnInit() {
  }

}
