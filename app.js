const Koa = require('koa')
const JWT = require('koa-jwt')
const compose = require('koa-compose')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const api = require('./modules/public')
const login = require('./modules/user')
const app = new Koa()

const jwt = (JWT({ secret: 'zhangnan' }).unless({ path: [/^\/public/, /^\/login/] }))
const middleware = compose([
    jwt
])
router.use('/api', api.routes())
router.use('/login', login.routes())
app.use(middleware)
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
