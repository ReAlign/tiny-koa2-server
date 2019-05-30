const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const convert = require('koa-convert');
const response = require('koa2-response');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const cors = require('koa2-cors');

app.use(cors({
    origin: (ctx) => {
        if (ctx.url === '/test') {
            return false;
        }
        return '*';
    },
    // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    // maxAge: 5,
    // credentials: true,
    // allowMethods: ['GET', 'POST', 'DELETE'],
    // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

const index = require('./routes/index');
const users = require('./routes/users');
const post = require('./routes/post');

app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

app.use(response);

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

    ctx.success({
        name: 'test'
    });

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