export class BoardGame {
    id: number;
    name: string;
    description: string;
    imageURL: string;

    constructor(
        id?: number,
        name?: string,
        description?: string,
        imageURL?: string
    ){
        this.id = id ?? -1;
        this.name = name ?? "username";
        this.description = description ?? "";
        this.imageURL = imageURL ?? "";
    }

    public static fromJson(json: any): BoardGame {
        let boardGame: BoardGame = new BoardGame();
        boardGame.id = json['id'] ?? -1;
        boardGame.name = json['name'] ?? 'Unknown name';
        boardGame.description = json['description'] ?? 'Empty description';
        boardGame.imageURL = json['image'] ?? '';
        return boardGame;
    }
}