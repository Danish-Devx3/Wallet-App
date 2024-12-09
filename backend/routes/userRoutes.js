const { Router } = require("express")
const router = Router();

router.get('/login',(req, res)=>{
    res.send('hi from user')
})

module.exports = router