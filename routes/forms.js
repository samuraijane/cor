const express = require('express');
const router = express.Router();
const db = require('../models')
router.post('/mentor', async (req, res) => {
    let { Q1, Q2, Q3, Q4, Q5, Q6 } = req.body
    try {
        //create a dataBase entry
        let answers = await db.Mentor.create({ Q1, Q2, Q3, Q4, Q5, Q6 })
        res.json(answers)
    } catch (err) {
        console.log('error', err)
        return res.status(423).json({ err })
    }
})

router.post('/mentee', async (req, res) => {
    let { Q1, Q2, Q3, Q4, Q5 } = req.body
    try {
        let answers = await db.Mentee.create({ Q1, Q2, Q3, Q4, Q5 })
        res.json(answers)
    } catch (err) {
        console.log('error', err)
        return res.status(423).json({ err })
    }
})

module.exports = router;