export class User {
    id: number;
    name: string;
    password: string;
    email: string;
    gameIds: number[];

    constructor(
        id?: number,
        name?: string,
        password?: string,
        email?: string,
        gameIds?: number[]
    ){
        this.id = id ?? -1;
        this.name = name ?? "username";
        this.password = password ?? "default";
        this.email = email ?? "";
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