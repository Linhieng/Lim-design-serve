import express from 'express'
import { getCurDate } from '../utils/time'

const router = express.Router()

router.use((req, res, next) => {
    console.log('/auto Time: ', getCurDate())
    next()
})

router.get('/', (req, res) => {
    res.send('Hello, World!')
})

type LoginBody = {
    username: string
    password: string
}
router.post('/login', (req, res) => {
    const body: LoginBody = req.body
    if (!body.username || !body.password) {
        res.status(400).send('请求体格式错误')
    } else if (body.username !== 'admin') {
        res.send('username not exist')
    } else if (body.password !== '123') {
        res.send('wrong password')
    } else {
        res.send('succeed login')
    }
})

export default router
