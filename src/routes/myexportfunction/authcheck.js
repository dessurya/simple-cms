const fetch = require("node-fetch");

export async function post(req, res, next) {
    let execute = await getToken(req.body)
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({
        success: execute.success,
        auth: execute.auth
    }))
}

const getToken = async(params) => {
    let bodyReq = { params }
    let objeckOfLC = {
        method: 'POST',
        credentials: 'cross-origin',
        body: JSON.stringify(bodyReq),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const getToken = await fetch('http://localhost:7777/l4z4tt0/public/api/auth', objeckOfLC).then(
        res => res.json()
    ).catch(
        error => { return error }
    )
    return getToken
}