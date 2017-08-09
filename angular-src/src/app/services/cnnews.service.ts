import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CnNewsService {
    constructor(private http: Http) {
        console.log('Service Initialized...');
    }

    getCnNews() {
        return this.http.get('https://localhost:5000/cnnews')
                .map(res => res.json());
    }
}
