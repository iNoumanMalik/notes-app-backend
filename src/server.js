import 'dotenv/config';
import express from "express"
import mongoose from 'mongoose';
import cors from 'cors'
import authRoutes from "./routes/auth.js"
import noteRoutes from "./routes/notes.js"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())
app.use('/api/auth',authRoutes)
app.use('/api/notes',noteRoutes)

mongoose
.connect(process.env.MONGO_URL)
.then(()=> app.listen(PORT, ()=>console.log('Server is listening on: '+ PORT)))
.catch(err => console.log(err))
