import * as Koa from 'koa';
let port:number = 9990;

let app = new Koa();
app.use((ctx:any, next:any)=>{
  ctx.body = 'use ts in koa'
})

app.listen(port, '0.0.0.0', () => {
  console.log(`app started at port ${port}...`)
})
