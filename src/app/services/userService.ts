import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Config } from "./config";
import { User } from "../model/user";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(public http: HttpClient, private config: Config) {}

    private getUserApiUrl(): string {
        return this.config.get('API_URL') + '/user';
    }

    public getAllUsers(): Observable<User[]> {
        const url = `${this.getUserApiUrl()}/all`;
        return this.http
            .get<User[]>(url)
            .pipe(
                map(jsonResponse => {
                    if (jsonResponse) {
                        return jsonResponse.map(User.fromJson);
                    }
                    return [];
                }),
            );
    }
}