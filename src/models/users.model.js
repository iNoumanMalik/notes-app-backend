const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: [true,'Username must be in lowercase']
    },

    password:{
        type: String,
        required: true,
    }

},{timestamps:true})

userSchema.pre('save',async function (){
    if(!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password,10)
})

export default mongoose.model("User",userSchema)
