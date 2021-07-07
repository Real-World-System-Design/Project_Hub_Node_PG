import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity("users")
export class User {
    @PrimaryColumn()
    email: string

    @Column({type: 'text'})
    username: string

    @Column({type: 'text'})
    password?: string

    token: string

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date

    constructor(username: string, password: string, email: string) {
        this.username = username,
        this.password = password,
        this.email = email
    }
}