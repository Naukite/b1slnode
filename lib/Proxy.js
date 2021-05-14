const fetch = require('node-fetch');
let proxy = null

function Proxy(slUrl, apiKey) {
    this.slUrl = `${slUrl}/b1s/v2/`
    this.apiKey = apiKey
    this.request = {
        headers: {
            apiKey: this.apiKey
        } 
    }

    this.get = async (endpoint) => {
        return fetch(`${this.slUrl}${endpoint}`, this.request).then(r => r.json())
    }

    return this
}

function GetProxy() {
    if (!proxy) 
        proxy = new Proxy(process.env.SERVICELAYER, process.env.APIKEY)
    return proxy
}

module.exports = GetProxy
 
/* TEST CODE*/
/*require('dotenv').config()
const p = GetProxy()

async function getOrders() {
    console.log(await p.get("Orders"))
}

getOrders()*/