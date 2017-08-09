import { Component, OnInit } from '@angular/core';
import { InsService } from '../../services/ins.service';

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css']
})
export class InsComponent implements OnInit {
  ins1: any[];
  ins2: any[];
  ins3: any[];
  modalDisplay: string;
  modalSrc: string = "";
  captionText: string;
  youtubeLogo: string;
  constructor(private insService: InsService) { }

  ngOnInit() {
    this.insService.getIns()
        .subscribe(ins => {
          this.ins1 = ins;
          this.ins2 = this.ins1.splice(5,5);
          this.ins3 = this.ins1.splice(5,5);
        })
    this.youtubeLogo = 'assets/images/youtube.png';
  }

  onImgClick(i) {
    this.modalDisplay = 'block';
    this.modalSrc = i.images.standard_resolution.url;
    if (i.caption != null) {
      this.captionText = i.caption.text;
    } else {
      this.captionText = 'My Photo';
    }
  }

  closeModal() {
    this.modalDisplay = 'none';
  }

}
