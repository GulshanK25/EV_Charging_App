import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './config/dbconfig.js';
import router from './routes/routes.js';
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));

dotenv.config();
connectdb()
const port = process.env.PORT

app.use("/user",router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))