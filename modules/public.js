const router = require('koa-router')()

router.get('/', (ctx) => {
  ctx.body = '携带token服务'
})
module.exports = router
