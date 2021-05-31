"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const typeorm_1 = require("typeorm");
const users_1 = require("./users");
let Project = class Project {
    // constructor(slug: string, title: string , body: string,tagList: string[], author: User) {
    //     this.slug = slug,
    //     this.title = title,
    //     this.body = body
    //     this.tagList = tagList
    //     this.author = author
    // }
    constructor(slug, title, body, author) {
        this.slug = slug;
        this.title = title;
        this.body = body;
        this.author = author;
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Project.prototype, "slug", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "body", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", Array)
], Project.prototype, "tagList", void 0);
__decorate([
    typeorm_1.ManyToOne(() => users_1.User),
    __metadata("design:type", users_1.User)
], Project.prototype, "author", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Project.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date
    // constructor(slug: string, title: string , body: string,tagList: string[], author: User) {
    //     this.slug = slug,
    //     this.title = title,
    //     this.body = body
    //     this.tagList = tagList
    //     this.author = author
    // }
    )
], Project.prototype, "updatedAt", void 0);
Project = __decorate([
    typeorm_1.Entity("projects"),
    __metadata("design:paramtypes", [String, String, String, users_1.User])
], Project);
exports.Project = Project;
