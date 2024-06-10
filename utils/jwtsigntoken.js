import jwt from "jsonwebtoken"
export const genratToken =(id)=>{
const token =  jwt.sign({id },process.env.TWT_TOKEN_KEY ,{ expiresIn: '15d' }) //  2 days
return token
}
