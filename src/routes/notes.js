import { Router } from 'express';
import Notes from "../models/notes.model.js"
import auth from "../middlewares/auth.js"

const router = new Router();

router.use(auth);

router.get('/',async(req,res)=>{
    const notes = await Notes.find({userId: req.user.id}).sort('-updatedAt')
    res.json(notes)
})


router.post('/',async(req,res)=>{
    const note = await Notes.create({...req.body, userId: req.user.id})
    res.json(note);
})

router.put('/:id',async(req,res)=>{
    const note = await Notes.findOneAndUpdate({_id:req.params.id, userId: req.user.id}, req.body, {new: true})
    res.json(note);
})

router.delete('/:id',async(req,res)=>{
    await Notes.findOneAndDelete({_id:req.params.id, userId:req.user.id})
    res.json({ok:true})
})

export default router;