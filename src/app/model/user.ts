export class User {
    constructor(
        public id?: number,
        public name?: string,
        public password?: string,
        public email?: string,
        public gameIds?: number[]
    ){
        this.id = id ?? -1;
        this.name = name ?? "username";
        this.gameIds = gameIds ?? [];
    }

    public static fromJson(json: any): User {
        let user = new User();
        user.id = json['id'] ?? '';
        user.name  = json['name'] ?? -1;
        user.password  = json['password'] ?? -1;
        user.email  = json['email'] ?? '';
        user.gameIds = json['gamesIds'] ?? [];
        return user;
    }
}