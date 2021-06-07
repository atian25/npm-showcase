'use strict';

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  const name = ctx.query.name || 'anonymous';
  ctx.body = `hi, ${name}`;
});

app.listen(3000, () => {
  console.log('server started at http://localhost:3000');
});

