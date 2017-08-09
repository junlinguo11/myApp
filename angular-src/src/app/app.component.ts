import { Component, AfterViewInit  } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngAfterViewInit(){
        $(document).ready(function(){
          $('.wrapper').mousewheel(function(e, delta) {
            $(this).scrollLeft(this.scrollLeft + (-delta * 60));
            e.preventDefault();
        });
      });
     }
}
