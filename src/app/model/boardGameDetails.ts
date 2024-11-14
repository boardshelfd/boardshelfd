export class BoardGameDetails {
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

    public static fromJson(json: any): BoardGameDetails {
        let boardGameDetails: BoardGameDetails = new BoardGameDetails();
        boardGameDetails.id = json['gameId'] ?? -1;
        boardGameDetails.name = json['name'] ?? 'Unknown name';
        boardGameDetails.description = json['description'] ?? 'Empty description';
        boardGameDetails.imageURL = json['image'] ?? '';
        boardGameDetails.thumbnail = json['thumbnail'];
        boardGameDetails.minPlayers = json['minPlayers'];
        boardGameDetails.maxPlayers = json['maxPlayers'];
        boardGameDetails.yearPublished = json['yearPublished'];
        //boardGameDetails.bggRating = json['bggRating'];
        //boardGameDetails.averageRating = json['averageRating'];
        boardGameDetails.rank = json['rank'];
        boardGameDetails.designers = json['designers'];
        boardGameDetails.publishers = json['publishers'];
        boardGameDetails.artists = json['artists'];
        return boardGameDetails;
    }
}