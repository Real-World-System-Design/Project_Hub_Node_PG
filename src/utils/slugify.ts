export async function slugify(title: string) {
    
    //title -- this is my new project
    //slug  -- this-is-my-new-project


    let slugger = [];

    for(let i = 0;i< title.length; i++) {
        
        if(i >= 30) break;
        const char = title[i].toLowerCase();

        if(char >= "a" && char <= "z") {
            slugger.push(char);
        }else {
            slugger.push("-");
        }
    }
    return slugger.join('');
}