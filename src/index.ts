import express from 'express'
import cors from 'cors'
import http from 'http'

import routerAuth from './routers/auth'

const app = express()
const port = 8888

app.use(cors())
app.use(express.json())

app.use('/auth', routerAuth)

http.createServer(app).listen(port, () => {
    console.log(`listen ${port}...`)
})
