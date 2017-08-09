import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    constructor(private http: Http) {
        console.log('Service Initialized...');
    }

    getWeather() {
        return this.http.get('https://localhost:5000/weather')
                .map(res => res.json());
    }
}
