const Koa = require('koa');
const app = new Koa();
const port = 8008;

const home = async (ctx, next)=>{
    await next();
    ctx.response.type = 'text/html';
<<<<<<< HEAD
    ctx.response.body = '<h2>Hello, koa2!</h2>';
}

app.use(home);

// 在端口3000监听:
=======
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

>>>>>>> ce4deeadc5cd8428b0c03de3a506b77ee2d4e599
app.listen(port);
console.log(`app started at port ${port}...`);
