const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const utils = require('./utils/index');



const app = new Koa();

app.use(async (ctx, next)=> {
  console.log(ctx.path);
  if(ctx.path === '/fp.css') {
    await utils.sleep(2000);
  }
  await next();
})
app.use(serve(path.resolve(__dirname, 'templates')));
app.use(serve(path.resolve(__dirname, 'static')));

app.on('error', (err)=> {
  console.error(err);
})
app.listen(3000, ()=> {
  console.log('server started at port: 3000');
})


