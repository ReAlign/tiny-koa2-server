const router = require('koa-router')();

router.post('/', async (ctx, next) => {
    console.log('query___');
    console.log(ctx.request.body);

    ctx.body.cb = 'create-page';
    await next();
});

module.exports = router;
