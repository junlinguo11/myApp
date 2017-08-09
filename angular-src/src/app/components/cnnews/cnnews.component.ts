import { Component, OnInit } from '@angular/core';
import { CnNewsService } from '../../services/cnnews.service';

@Component({
  selector: 'app-cnnews',
  templateUrl: './cnnews.component.html',
  styleUrls: ['./cnnews.component.css']
})
export class CnnewsComponent implements OnInit {
  cnnews: any[];
  top: any[];
  constructor(private cnnewsService: CnNewsService) { }

  ngOnInit() {
    this.cnnewsService.getCnNews()
        .subscribe(cnnews => {
          this.cnnews = cnnews;
        })
  }

  onCnNewsClick(n) {
    window.open(n.url);
  }

}
