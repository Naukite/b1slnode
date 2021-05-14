const express = require('express')
const router = express.Router()
const proxy = require('../lib/Proxy')()

router.get('/', async (req, res) => {
    res.send(await proxy.get("Orders"))
    
})

module.exports = router