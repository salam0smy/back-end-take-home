var express = require('express')
var router = express.Router()

router.get('/status', (req, res) =>{
    res.send("Hello, im running! v1");
});

router.get('/route', (req, res) => {
    res.send('im route the route');
});

module.exports = router;
