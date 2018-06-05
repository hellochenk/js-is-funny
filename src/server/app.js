const Koa = require('koa');
const app = new Koa();
const port = 8008;

const date = async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
}
const logger = async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
}
const home = async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>Hello, koa2!</h2>';
}

app.use(date);
app.use(logger);
app.use(home);
// 在端口port监听:

app.listen(port);
console.log(`app started at port ${port}...`);
