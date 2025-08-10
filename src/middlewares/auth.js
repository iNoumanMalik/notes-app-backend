import jwt from 'jsonwebtoken'

export default function (req,res,next){
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token)
    if(!token) return res.sendStatus(401)

    try{
        req.user = jwt.verify(token,process.env.JWT_SECRET);
        next();
    }catch(error){
        console.log('JWT verification failed:', error.message);
        console.log('Token received:', token);
        console.log('JWT_SECRET:', process.env.JWT_SECRET);
        res.sendStatus(403);
    }
}