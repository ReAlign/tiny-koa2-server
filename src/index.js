const app = require('./app');
const debug = require('debug')('demo:server');
const http = require('http');
const chalk = require('chalk');
const { say } = require('cfonts');

const log = console.log;

const Func = {
    normalizePort(val) {
        const port = parseInt(val, 10);

        if (isNaN(port)) {
            return val;
        }

        if (port >= 0) {
            return port;
        }

        return false;
    },
    onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bind = typeof port === 'string'
            ? `Pipe ${port}`
            : `Port ${port}`;

        // handle specific listen errors with friendly messages
        switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
        }
    },
    onListening() {
        say('Server Running', {
            colors: ['#409EFF'],
            font: 'simple',
            space: false
        });
        log(chalk.green(`\n\n🚀 🚀 🚀  Listening on: http://localhost:${port}\n`));
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? `pipe ${addr}`
            : `port ${addr.port}`;
        debug(`Listening on ${bind}`);
    },
};

const port = Func.normalizePort(process.env.PORT || '3210');
const server = http.createServer(app.callback());

server.listen(port);
server.on('error', Func.onError);
server.on('listening', Func.onListening);