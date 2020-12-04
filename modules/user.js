const router = require('koa-router')()
const jwt = require('jsonwebtoken')

router.post('/login', async (ctx) => {
    const { body } = ctx.request
    const user = [{ id: 1, name: 'name', password: 'password' }]
    const result = user.find((item) => {
        return body.id == item.id
    })
    if (result !== null) {
        const token = jwt.sign({
            name: result.name,
            _id: result._id
        }, 'zhangnan', { expiresIn: '0.3m' })
        ctx.body = {
            code: 200,
            token: token,
            msg: '登录成功'
        }
    }
})
module.exports = router
