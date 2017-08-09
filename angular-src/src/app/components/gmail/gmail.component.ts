import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {
  gmailLogo: string;
  constructor() { }

  ngOnInit() {
    this.gmailLogo = 'assets/images/gmail.png';
  }

}
