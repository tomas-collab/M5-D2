import express from 'express'
import { fileURLToPath } from 'node:url'

const authorsRouter = express.Router()
const currentFilePath = fileURLToPath(import.meta.url)
authorsRouter.post('/',(req,resp)=>{})
authorsRouter.get('/',(req,resp)=>{resp.send(currentFilePath)})
authorsRouter.get('/:id',(req,resp)=>{})
authorsRouter.put('/:id',(req,resp)=>{})
authorsRouter.delete('/:id',(req,resp)=>{})

export default authorsRouter