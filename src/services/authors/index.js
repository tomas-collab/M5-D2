import express from 'express'
import { fileURLToPath } from 'url'
import {dirname,join} from 'path'
import fs from 'fs'



const authorsRouter = express.Router()
const currentFilePath = fileURLToPath(import.meta.url)
const currnetDirPath = dirname(currentFilePath)
const authorsJSONpath = join(currnetDirPath , 'authors.json')


authorsRouter.post('/',(req,resp)=>{resp.send('hello post')})
authorsRouter.get('/',(request,response)=>{
    const fileContent = fs.readFileSync(authorsJSONpath)
   
    response.send(JSON.parse(fileContent))
    // resp.send({currentFilePath,metaUrl: import.meta.url,authorsJSONpath}) 
})

authorsRouter.get('/:authorID',(request,response) => {

    const authors = JSON.parse(fs.readFileSync(authorsJSONpath))
    const author = authors.find(s => s.id === request.params.authorID)
    response.send(author)
    
})

authorsRouter.put('/:id',(req,resp)=>{resp.send('hello put')})
authorsRouter.delete('/:id',(req,resp)=>{resp.send('hello delete')})


export default authorsRouter