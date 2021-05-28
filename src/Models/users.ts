import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id : Number

    @Column()
    username: String

    @Column()
    password: String

    @Column()
    email: String

    constructor(username: String, password: String, email: String) {
        this.username = username,
        this.password = password,
        this.email = email
    }
}