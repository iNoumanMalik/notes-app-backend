import {Router} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/users.model.js'

const router = Router();

router.get('/',(req,res)=>{
    res.send('hello')
})

router.post('/register',async (req,res)=>{
    try{
        const user = await User.create(req.body);
        res.json({user})
    }catch(e){
        res.status(400).json({message: "Email already exists"})
    }   
})

router.post('/login',async (req,res)=>{
    const user = User.findOne({email: req.body.email})
    if(!user) return res.status(400).json({error: 'Invalid Credentials'})

    if (!user.password) {
        return res.status(500).json({ message: "Password not stored for this user" });
      }
    
    const ok = await bcrypt.compare(req.body.password, user.password);
    if(!ok) return res.status(400).json({error:'Password does not match'})
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: '1h'});
    res.json({token});
})

export default router;