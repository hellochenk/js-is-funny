const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

var app = new Koa()
const port = 8881

app.use(cors())
app.use(bodyParser())
const useragent = require('useragent')

var router = new Router();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
})

const home = async ctx => {
  let agent = ctx.request.headers['user-agent']
  let user = useragent.parse(agent);
  let ismobile = (/Mobile/g).test(user.family);
  console.log('user:', user)
  if (ismobile) {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>Hello, koa2!,request from mobile</h2>';
  } else {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>Hello, koa2!,request from pc</h2>';
  }
}

const test = async ctx => {
  let req = ctx.request.body;
  ctx.response.type = 'json';
  let data = {
    data: req || 'this is test data'
  }
  ctx.response.body = data;
}

const hello = async ctx => {
  var name = ctx.params;
  console.log(name)
  ctx.response.body = `<h1>Hello, ${JSON.stringify(name)}!</h1>`;
}

router.get('/', home)
router.post('/haha', test)
router.get('/hello/:id', hello)

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port, '0.0.0.0', () => {
  console.log(`app started at port ${port}...`)
})

process.on('SIGUSR2', () => {
  process.exit(0);
});