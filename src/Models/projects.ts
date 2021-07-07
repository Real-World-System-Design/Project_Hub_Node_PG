import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./users";

@Entity("projects")
export class Project{
    @PrimaryColumn()
    slug: string

    @Column({type: 'text', nullable: false})
    title: string

    @Column({type: 'text', nullable: true})
    links?: string[]

    @Column({type: 'text', nullable: false})
    body: string

    @Column({type: 'text', nullable: true})
    tagList?: string[]

    @ManyToOne(() => User)
    author: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

/*
    constructor(slug: string, title: string, links: string[] ,body: string, tagList: string[],author: User){
        this.slug = slug
        this.title = title
        this.links = links
        this.body = body
        this.tagList = tagList
        this.author = author
    }
*/

    constructor(slug: string, title: string, body: string) {
        this.slug = slug
        this.title = title
        this.body = body
    }
}