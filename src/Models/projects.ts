import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./users";

@Entity("projects")
export class Project{
    @PrimaryColumn()
    slug: string

    @Column({type: 'text', nullable: true})
    title: string

    @Column('json', {default: [], nullable: true})
    links?: Array<string>

    @Column({type: 'text', nullable: true})
    body: string

    @Column('json', {default: [], nullable: true})
    tags?: Array<string>

    @ManyToOne(() => User)
    author: User

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date

    constructor(slug: string, title: string, links: string[] ,body: string, tags: string[], author: User){
        this.slug = slug
        this.title = title
        this.links = links
        this.body = body
        this.tags = tags
        this.author = author
    }
}