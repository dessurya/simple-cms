const fetch = require("node-fetch");

export async function post(req, res, next) {
    let execute = await getDashboard(req)
    if (execute.success == true) execute = rebuildJsonData(execute)
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({
        success: execute.success,
        data: execute.data
    }))
}

const getDashboard = (auth) => {
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
    const getData = fetch('http://localhost:7777/l4z4tt0/public/api/dashboard', objeckReqData).then(
        res => res.json()
    ).catch(
        error => { return error }
    )
    return getData
}

const rebuildJsonData = (dataJson) => {
    let { data, success } = dataJson;
    let { content } = data;
    let {
        News,
        Kemitraan,
        Location,
        Slider,
        MenuReguler,
        MenuPromo,
    } = JSON.parse(JSON.stringify(content).replace(/\s/g, ""));
    News.name = 'News'
    Kemitraan.name = 'Kemitraan'
    Location.name = 'Location'
    Slider.name = 'Slider'
    MenuReguler.name = 'Menu Reguler'
    MenuPromo.name = 'Menu Promo'

    let newArr = []

    newArr = [...newArr, News]
    newArr = [...newArr, Kemitraan]
    newArr = [...newArr, Location]
    newArr = [...newArr, Slider]
    newArr = [...newArr, MenuReguler]
    newArr = [...newArr, MenuPromo]

    dataJson.data.content = newArr
    return dataJson
}