const Koa = require('koa');
const app = new Koa();
const port = 8008;

const home = async (ctx, next)=>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>Hello, koa2!</h2>';
}

app.use(home);

// 在端口3000监听:
app.listen(port);
console.log(`app started at port ${port}...`);
