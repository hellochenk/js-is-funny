var Koa = require('koa');
var Router = require('koa-router');
 
var app = new Koa();
var router = new Router();
const useragent = require('useragent');

const port = 8008;

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

const index = async ctx=>{
  ctx.response.type = 'text/html';
  ctx.response.body = '<p>hello index,</p>'
}

router.get('/',home)
router.get('/index',index)

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port,()=>{
  console.log(`app started at port ${port}...`);

});

