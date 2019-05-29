var router = require('koa-router')();

router.post('/', async (ctx, next) => {
    ctx.body.a = 'data get';
    await next();
});

module.exports = router;
