var router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.body.aaa = 'Users';
    await next();
});

module.exports = router;
