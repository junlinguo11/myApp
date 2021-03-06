import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
    constructor(private http: Http) {
        console.log('Service Initialized...');
    }

    getNews() {
        return this.http.get('http://localhost:3000/news')
                .map(res => res.json());
    }
}
