import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  edu: object[];
  skill: object[];
  cert: object[];
  language: object[];
  constructor(private CvService: CvService) { }

  ngOnInit() {
    this.CvService.getEdu()
        .subscribe(edu => {
          this.edu = edu;
        })
    this.CvService.getSkill()
        .subscribe(skill => {
          this.skill = skill[0];
        })

    this.CvService.getCert()
        .subscribe(cert => {
          this.cert = cert;
        })

    this.CvService.getLanguage()
        .subscribe(language => {
          this.language = language;
        })
  }

}
