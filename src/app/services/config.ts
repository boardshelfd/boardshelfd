import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({providedIn: 'any'})
export class Config{
    private resource: any;

    constructor(public http: HttpClient) {}

    load(){
        const self = this;
        new Promise((resolve, reject) => {
            this.http
                .get('config/api-config.json', {
                    headers: new HttpHeaders().set('Skip-Auth', 'True').set('Access-Control-Allow-Origin', '*'),
                })
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        reject(error);
                        return throwError(error);
                    }),
                )
                .subscribe(data => {
                    self.resource = data;
                    resolve(true);
                });
        });
    }

    get(key: any): any {
        if (key in this.resource) {
            return this.resource[key];
        } else {
            console.error(`unknown secured config key ${key}`);
            return null;
        }
    }
}