var router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.body.aaa = '新闻page';
    await next();
});

module.exports = router;
