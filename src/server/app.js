const Koa = require('koa');
const _ = require('koa-route');
const app = new Koa();
const port = 8008;
const fs = require('fs')

const db = {
  tobi: { name: 'tobi', species: 'ferret1' },
  loki: { name: 'loki', species: 'ferret2' },
  jane: { name: 'jane', species: 'ferret3' }
};

const pets = {
  list: (ctx) => {
    const names = Object.keys(db);
    ctx.body = 'pets: ' + names.join(', ');
  },

  show: (ctx, name) => {
    const pet = db[name];
    if (!pet) return ctx.throw('cannot find that pet', 404);
    ctx.body = pet.name + ' is a ' + pet.species;
  }
};

app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));

const home = async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>Hello, koa2!</h2>';
}


// app.use(date);
// app.use(logger);
app.use(home);
// 在端口port监听:

app.listen(port);
console.log(`app started at port ${port}...`);
