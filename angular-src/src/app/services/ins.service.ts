import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InsService {
    constructor(private http: Http) {
        console.log('Service Initialized...');
    }

    getIns() {
        return this.http.get('https://localhost:5000/ins')
                .map(res => res.json());
    }
}
