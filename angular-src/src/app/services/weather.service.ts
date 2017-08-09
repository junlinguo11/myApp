import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    constructor(private http: Http) {
        console.log('Service Initialized...');
    }

    getWeather() {
        return this.http.get('http://localhost:3000/weather')
                .map(res => res.json());
    }
}
