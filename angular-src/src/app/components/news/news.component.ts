import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any[];
  mdnLogo: string;
  githubLogo: string;
  bitbucketLogo: string;
  treehouseLogo: string;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
        .subscribe(news => {
          this.news = news;
          console.log(news);
        })
    this.mdnLogo = 'assets/images/mdn.png';
    this.githubLogo = 'assets/images/github.png';
    this.bitbucketLogo = 'assets/images/bitbucket.png';
    this.treehouseLogo = 'assets/images/treehouse.png';
  }

  onNewsClick(n) {
    window.open(n.url);
  }
}
