import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    $(document).ready(function() {
        $('.sk-cube-grid').delay(2000).fadeOut('fast', function(){
            $('.wrapper').animate({opacity: '1'}, 'slow');
        }); 
    });
  }

}
