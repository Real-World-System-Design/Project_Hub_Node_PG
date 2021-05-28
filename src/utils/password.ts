import bcrypt from "bcrypt";

const saltRounds = 10;

export async function hashPass(password: string): Promise<string> {
    return new Promise<string>((resolve, reject) =>{
        bcrypt.hash(password, saltRounds, (err, hashedPass) => {
            if(err) throw reject(err)
            resolve(hashedPass);
        })
    })
}

export async function matchpass(pass: string, hashedPass: string): Promise<boolean>{
    return new Promise<boolean>((resolve, reject)=> {
        bcrypt.compare(pass, hashedPass, (err: any, same) => {
            if(err) throw reject(err)
            return resolve(same)
        })
    })
}