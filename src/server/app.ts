import Koa =  require('koa');
import Test from './initRouter';

let p = new Test('123');
console.log(p.getVal());

function greeter(person: string) {
  return "Hello, " + person;
}
let a:string
let user = "Jane User";
a = user
let port:number = 9990;

let app = new Koa();
app.use((ctx:any, next:any)=>{
  ctx.body = 'use ts in koa'
})
app.listen(port, '0.0.0.0', () => {
  console.log(`app started at port ${port}...`)
})
