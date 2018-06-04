const Koa = require('koa');
const app = new Koa();
const port = 8008;

app.use(async(ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
// 在端口3000监听:
app.listen(port);
console.log(`app started at port ${port}...`);