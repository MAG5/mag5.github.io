const os = require('os')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = `I'm ${os.hostname()}`
})

app.listen(8080, () => {
  console.log('server listening on 8080')
})
