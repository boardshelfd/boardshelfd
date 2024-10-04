export class BoardGame {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public thumbnail?: string
    ){
        this.id = id ?? -1;
        this.name = name ?? "username";
    }

    public static fromJson(json: any): BoardGame {
        let boardGame: BoardGame = new BoardGame();
        boardGame.id = json['id'] ?? -1;
        boardGame.name = json['name'] ?? 'Unknown name';
        boardGame.description = json['description'] ?? 'Empty description';
        boardGame.thumbnail = json['thumbnail'] ?? '';
        return boardGame;
    }
}