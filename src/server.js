import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import { json } from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express()

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app
    .use(express.urlencoded())
    .use(express.json())
    .use(
        json({
            type: 'application/json'
        })
    )
    .use(cookieParser())
    .use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware({
            session: () => ({ auth: null }),
        })
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });