const Router = require('koa-router');
const mysql = require('sync-mysql');
const dbconfig = require('../database/config.js');
let conn = new mysql(dbconfig);
const crypto = require('crypto');

const router = new Router();

router.post('/save', async(ctx, next) => {
    const {memoContent, memoImage} = ctx.request.body;

    try {
        const query = `INSERT INTO mymemo (memoContent, memoImage) values ('${memoContent}', '${memoImage}')`;
        const rows = await conn.query(query);

        ctx.response.status = 200;
        ctx.response.body = {
            result: true
        }
    } catch (err) {
        ctx.response.status = 400;
        ctx.response.body = {
            result: false
        };
    }
})

module.exports = router;