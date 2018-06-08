const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
var app = new Koa();
app.use(cors());
app.use(bodyParser());

var router = new Router();
const useragent = require('useragent');

// import InitApp from './initRouter';

const port = 8009;

const home = async ctx => {
  let agent = ctx.request.headers['user-agent']
  let user = useragent.parse(agent);
  let ismobile = (/Mobile/g).test(user.family);
  console.log('user:',user)
  if(ismobile){
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>Hello, koa2!,request from mobile</h2>';
  }else{
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

const index = async ctx=>{
  ctx.response.type = 'text/html';
  ctx.response.body = '<p>hello index,</p>'
}

// router.get('/index.html',)
router.get('/',home)
router.post('/haha',test)
router.get('/index',index)

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port,()=>{
  console.log(`app started at port ${port}...`);

});

