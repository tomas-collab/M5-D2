import express from 'express'
import cors from 'cors'
import listEndPoints from 'express-list-endpoints'
import authorsRouter from './services/authors/index.js'


const server = express()
const port = 3000
//middleware
const loggerMiddleware = (req,res,next)=>{
    console.log(`req method ${req.method} -- req URL ${req.url} -- ${new Date()}`)
    next()
}


server.use(loggerMiddleware)
server.use(cors())
server.use(express.json())


server.use('/authors', authorsRouter)

console.table(listEndPoints(server))
server.listen(port,()=>{
    console.log('server listening on port ' + port)
})