"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
async function slugify(title) {
    //title -- this is my new project
    //slug  -- this-is-my-new-project
    let slugger = [];
    for (let i = 0; i < title.length; i++) {
        if (i >= 30)
            break;
        const char = title[i].toLowerCase();
        if (char >= "a" && char <= "z") {
            slugger.push(char);
        }
        else {
            slugger.push("-");
        }
    }
    return slugger.join('');
}
exports.slugify = slugify;
