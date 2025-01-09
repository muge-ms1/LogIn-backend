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
app.use(cors({ origin: '*' }));

// api endpoints
app.use('/api/user',userRouter)
app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))