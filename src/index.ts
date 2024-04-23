import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from 'compression'
import router from './router'
import mongoose from 'mongoose'

const app = express()
app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const PORT = 8080

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`app listen on port ${PORT}`)
})

const MONGOL_URL = 'mongodb+srv://sang123:sang123456@cluster0.gahud6g.mongodb.net/testApi?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MONGOL_URL).then(() => console.log('Database connected!'))
mongoose.connection.on('error', (error: Error) => console.log(error))



app.use('/', router())