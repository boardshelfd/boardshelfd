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
        return this.config.get('BOARDSHELFD_API_URL')+'/boardgame';
    }

    public getBoardGameById(id: number): Observable<BoardGame> {
        const url = `${this.getBGGApiUrl()}/id/${id}`;
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

    public getBoardGameByName(name: string): Observable<BoardGame[]> {
        const url = `${this.getBGGApiUrl()}/search/${name}`;
        return this.http
            .get<BoardGame[]>(url)
            .pipe(
                map(jsonResponse => {
                    if (jsonResponse) {
                        return jsonResponse.map((json: any) => BoardGame.fromJson(json));
                    }
                    return [];
                }),
            );
    }

    public getHotBoardGame(): Observable<BoardGame[]> {
        const url = `${this.getBGGApiUrl()}/hot`;
        return this.http
            .get<BoardGame[]>(url)
            .pipe(
                map(jsonResponse => {
                    if (jsonResponse) {
                        return jsonResponse.map((json: any) => BoardGame.fromJson(json));
                    }
                    return [];
                }),
            );
    }
}