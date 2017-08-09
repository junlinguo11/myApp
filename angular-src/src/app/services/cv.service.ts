import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CvService {
    constructor(private http: Http) {
        console.log('Service Initialized...');
    }

    getEdu() {
        return this.http.get('https://localhost:5000/cv/edu')
                .map(res => res.json());
    }

    getSkill() {
        return this.http.get('https://localhost:5000/cv/skill')
                .map(res => res.json());
    }

    getCert() {
        return this.http.get('https://localhost:5000/cv/cert')
                .map(res => res.json());
    }

    getLanguage() {
        return this.http.get('https://localhost:5000/cv/language')
                .map(res => res.json());
    }
}
