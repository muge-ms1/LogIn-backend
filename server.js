import express from 'express'
import cors from 'cors'
import connectDB from './mongodb.js'
import userRouter from './userRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// middlewares
app.use(express.json())
app.use(cors({
    origin: ['https://log-in-frontend-1mmr.vercel.app'], // Allow only your frontend
    methods: ['GET', 'POST', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify headers
    credentials: true // Include credentials if needed
}));

// api endpoints
app.use('/api/user',userRouter)
app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))