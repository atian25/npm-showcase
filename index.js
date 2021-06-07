'use strict';

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  const name = ctx.query.name || 'anonymous';
  ctx.body = `hi, ${name}`;
});

module.exports = app;

// 当直接执行该文件时，启动服务。
if (require.main === module) {
  app.listen(3000, () => {
    console.log('server started at http://localhost:3000');
  });
}
