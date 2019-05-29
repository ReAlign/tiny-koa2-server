const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const convert = require('koa-convert');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');
const post = require('./routes/post');

app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

// normal handle
app.use(async (ctx, next) => {
    const {
        url,
        request: {
            query,
            querystring,
        },
    } = ctx;

    ctx.body = {
        url,
        query,
        querystring,
    };

    await next();
});

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/post', post.routes(), post.allowedMethods());

app.use(router.routes(), router.allowedMethods());

app.on('error', (err, ctx) => {
    console.log(err);
    logger.error('server error', err, ctx);
});

module.exports = app;