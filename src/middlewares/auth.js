import jwt from 'jsonwebtoken'

export default function (req,res,next){
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.sendStatus(401)

    try{
        req.user = jwt.verify(token,process.env.JWT_Secret);
        next();
    }catch{
        res.sendStatus(403);
    }
}