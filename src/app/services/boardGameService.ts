import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Config } from "./config";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { BoardGame } from "../model/boardGame";

@Injectable({providedIn: 'root'})
export class BoardGameService {
    constructor(public http: HttpClient, private config: Config) {}

    private getBGGApiUrl(): string {
        return this.config.get('BGG_JSON_API_URL') + '/thing';
    }

    public getBoardGameById(id: number): Observable<BoardGame> {
        const url = `${this.getBGGApiUrl()}/${id}`;
        return this.http
            .get<BoardGame>(url)
            .pipe(
                map(jsonResponse => {
                    if (jsonResponse) {
                        return BoardGame.fromJson(jsonResponse)
                    }
                    return new BoardGame();
                }),
            );
    }
}