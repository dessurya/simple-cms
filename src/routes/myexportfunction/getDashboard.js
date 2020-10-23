const fetch = require("node-fetch");

export async function post(req, res, next) {
    let execute = await getDashboard(req)
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({
        success: execute.success,
        data: execute.data
    }))
}

const getDashboard = async(auth) => {
    let bodyReq = auth.user
    let objeckReqData = {
        method: 'POST',
        credentials: 'cross-origin',
        body: JSON.stringify(bodyReq),
        headers: {
            'Content-Type': 'application/json',
            'Authentic': auth.token,
        }
    }
    const getData = await fetch('http://localhost:7777/l4z4tt0/public/api/dashboard', objeckReqData).then(
        res => res.json()
    ).catch(
        error => { return await error }
    )
    return await getData
}