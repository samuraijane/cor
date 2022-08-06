const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../models');


// sign-in route

router.post('/login', async (req, res)=>{

  try {
  let {email, password} = req.body
  let user = await db.Users.findAll({where: {email}})
  let result = bcrypt.compareSync(password, user.password);
  if(result) {
      console.log('Passwords Match!');
      res.status(202).json({
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        description: user.description,
        role: user.role,
        mediaURL: user.mediaURL,
        linkedinURL: user.linkedinURL,
        gender: user.gender,
        active: user.active,
      });

  } else {
    res.status(404).json({
      code: 404,
      message: 'Incorrect username or password'
    });
      console.log('Incorrect username or password');
  }
}
catch (error) {
  console.log(error);
    res.status(502).json({
      code: 502,
      message: 'No response from the servers.  Please try again later.'
    });
}
})

/* registration POST route */
router.post('/register', async (req, res) => {

  let { email, password } = req.body;

  try {
    let user = await db.Users.findOne({ where: { email } })
    if (user.length === 0) {
      hashedPass = bcrypt.hashSync(password, 10)
      const user = await db.Users.create({ email, hashedPass })
      return res.json({
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        description: user.description,
        role: user.role,
        mediaURL: user.mediaURL,
        linkedinURL: user.linkedinURL,
        gender: user.gender,
        active: user.active
      })
    }
    else {
      return res.status(409).json({
        code: 409,
        message: "Email already exists"
      })
    }
  }
  catch (err) {
    return res.status(502).json({
      code: 502,
      message: 'No response from the servers.  Please try again later.'
    })
  }
})

/* Admin GET route */
router.get('/admin', (req, res) => {
  try{
    let user = await db.Users.findAll({where: {role:'admin'}})
      res.status().json({
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          role: user.role,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
          active: user.active
        })
  }
  catch (err) {
    return res.status(502).json({
      code: 502,
      message: 'No response from the servers.  Please try again later.'
    })
  }
})

// staff GET route
router.get('/staff', (req, res)=>{
  try{
    let user = await db.Users.findAll({where: {role:'staff'}})
      res.status().json({
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          role: user.role,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
          active: user.active
        })
  }
  catch (err) {
    return res.status(502).json({
      code: 502,
      message: 'No response from the servers.  Please try again later.'
    })
  }
})

 // get a list of all mentees
router.get('/mentee', async (req, res)=>{
try{
    let user = await db.Users.findAll({where: {role:'mentee'}})
      res.status().json({
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          role: user.role,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
          active: user.active
        })
  }
  catch (err) {
    return res.status(502).json({
      code: 502,
      message: 'No response from the servers.  Please try again later.'
    })
  }
})

// get a list of all mentors
router.get('/mentor', async (req, res) => {
  try{
    let user = await db.Users.findAll({where: {role:'admin'}})
      res.status().json({
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          role: user.role,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
          active: user.active
        })
  }
  catch (err) {
    return res.status(502).json({
      code: 502,
      message: 'No response from the servers.  Please try again later.'
    })
  }
})

// update a user info
router.post('/updateUser', async (req, res)=>{
let {id, firstName, lastName, email, password, description, mediaURL,linkedinURL, gender} = req.body
  try {
    hashedPass = bcrypt.hashSync(password, 10)
    const user = await db.Users.update({ firstName, lastName, email, hashedPass, description, mediaURL, linkedinURL, gender },
      { where: { id: id } })
    res.json({
      message: `User ${user.id} ${user.firstName} ${user.lastName} has been updated`,
      user: {
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          role: user.role,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
        active: user.active
      }
    })
  }
  catch (err) {
    return res.status(502).json({
      code: 502,
      message: 'No response from the servers.  Please try again later.'
    })
  }
})

// delete user
router.post('/users', async (req, res)=>{
  let { id } = req.body
  try {
    await db.Users.destroy({ where: { id: id } })
    res.json({message: "User was deleted"})
  }
  catch (err) {
    return res.status(502).json({
      code: 502,
      message: 'No response from the servers.  Please try again later.'
    })
  }
})

module.exports = router;

