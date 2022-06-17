var express = require('express');
var router = express.Router();
// const dataBase = require('../models')
router.post('/mentor', async (req, res) => {
    
    let { Q1, Q2, Q3, Q4, Q5, Q6 } = req.body
    
    try {
        //create a dataBase entry
        // let answers = await dataBase.Mentor.create({ Q1, Q2, Q3, Q4, Q5, Q6 })
        res.json("answers")
        
    } catch (err) {
        console.log('error', err)
        return res.status(423).json({ err })
    }
    
})

router.post('/mentee', async (req, res) => {
    let { Q1, Q2, Q3, Q4, Q5 } = req.body
    try {
        // let answers = await dataBase.Mentee.create({ Q1, Q2, Q3, Q4, Q5 })
        res.json("answers")
    } catch (err) {
        console.log('error', err)
        return res.status(423).json({ err })
    }

})
module.exports = router;