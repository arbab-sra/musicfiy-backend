import jwt from "jsonwebtoken"
export const genratToken =(id)=>{
const token =  jwt.sign({id :id},process.env.TWT_TOKEN_KEY ,{ expiresIn: '15d' })
return token
}
