const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const convert = require('koa-convert');
const response = require('koa2-response');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const json = require('koa-json');

// routes
const index = require('./routes/get/index');
const createPage = require('./routes/post/create-page');

app.use(cors({
    origin: () => '*',
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type'],
}));

app.use(convert(bodyparser()));
app.use(convert(json()));
app.use(convert(logger()));
app.use(response);

// normal handle
app.use(async (ctx, next) => {
    ctx.success({
        code: 200,
        msg: 'ok',
    });

    await next();
});

router.use('/', index.routes(), index.allowedMethods());
router.use('/create-page', createPage.routes(), createPage.allowedMethods());

app.use(router.routes(), router.allowedMethods());

app.on('error', (err, ctx) => {
    console.log(err);
    logger.error('server error', err, ctx);
});

module.exports = app;