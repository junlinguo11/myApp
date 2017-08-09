import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, RouteReuseStrategy  } from '@angular/router';
import { CustomReuseStrategy } from './reuse-strategy';

import { AppComponent } from './app.component';
import { InsComponent } from './components/ins/ins.component';
import { NewsComponent } from './components/news/news.component';
import { CnnewsComponent } from './components/cnnews/cnnews.component';
import { WeatherComponent } from './components/weather/weather.component';

import { InsService } from './services/ins.service';
import { NewsService } from './services/news.service';
import { CnNewsService } from './services/cnnews.service';
import { WeatherService } from './services/weather.service';
import { CvService } from './services/cv.service';
import { GmailComponent } from './components/gmail/gmail.component';
import { CvComponent } from './components/cv/cv.component';
import { PortalComponent } from './components/portal/portal.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'cv', component: CvComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    InsComponent,
    NewsComponent,
    CnnewsComponent,
    WeatherComponent,
    GmailComponent,
    CvComponent,
    PortalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    InsService,
    NewsService,
    CnNewsService,
    WeatherService,
    CvService,
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
