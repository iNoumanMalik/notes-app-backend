const mongoose = require('mongoose')
const notesSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User',required:true},
    title: {type: String, required:true},
    body: String,
    tags: [String]

},{timestamps:true})

export default mongoose.model('Note',notesSchema)