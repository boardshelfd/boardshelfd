export class BoardGame {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public imageURL?: string,
        public thumbnail?: string,
        public minPlayers?: number,
        public maxPlayers?: number,
        public yearPublished?: number,
        //public bggRating?: number,
        //public averageRating.: number,
        public rank?: number,
        public designers?: string[],
        public publishers?: string[],
        public artists?: string[],
    ){}

    public static fromJson(json: any): BoardGame {
        let boardGame: BoardGame = new BoardGame();
        boardGame.id = json['id'] ?? -1;
        boardGame.name = json['name'] ?? 'Unknown name';
        boardGame.description = json['description'] ?? 'Empty description';
        boardGame.imageURL = json['thumbnail'] ?? '';
        return boardGame;
    }
}