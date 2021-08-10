import express from 'express'

const authorsRouter = express.Router()

authorsRouter.post('/',(req,resp)=>{})
authorsRouter.get('/',(req,resp)=>{resp.send('hello tomish meksen')})
authorsRouter.get('/:id',(req,resp)=>{})
authorsRouter.put('',(req,resp)=>{})
authorsRouter.delete('',(req,resp)=>{})

export default authorsRouter