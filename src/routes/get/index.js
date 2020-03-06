var router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.body.aaa = 'index';
    await next();
});

module.exports = router;
