const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../models');

router.use(express.urlencoded({extended: false})) // body parser (if needed)
router.use(express.json())

router.get('/', (req, res) => {
  res.send('home page')
})

/* sign-in routes */
router.get('/login', (req,res) => {

  res.render('login')
})

router.post('/login', async (req, res)=>{

  try {

  let {email, password} = req.body

  let user = await db.users.findAll({where: {email}})

  let result = bcrypt.compareSync(password, user.password);


  if(result) {
      console.log('Passwords Match!');
      res.redirect('/')

  } else {
      // password is incorrect
      res.render('login', {message: 'Incorrect username or password'});
      console.log('Incorrect username or password');
  }
}
catch (error) {
  console.log(error);
  res.render('login', {message: 'An error has occurred'});
}
})

/* sign-out routes */
router.get('/logout', (req, res)=>{

  res.render('logout')
})

router.post('/logout', (req, res)=>{

  res.render('logout')
})

/* user registration POST route */
router.post('/register', async (req, res) => {

  let { email, password } = req.body;

  try {

      let records = await db.users.findAll({ where: { email } })
      if (records.length === 0) {

          password = bcrypt.hashSync(password, 8)

          let newUserRecord = await db.users.create({email, password })
          return res.json({ userId: userId })
      }
      else {

          return res.status(422).json({ error: "Email already exists" })
      }
  }
  catch (err) {
      return res.status(423).json({ error: "Can't access database" })
  }

})

/* Admin GET route */
router.get('/', (req, res)=>{

  res.render('')
})

/* Admin POST register */
router.post('/', (req, res)=>{

  res.render('')
})

/* staff GET route */
router.get('/', (req, res)=>{

  res.render('')
})

 //! get a list of all mentees /* mentee GET route */
router.get('/mentee', async (req, res)=>{
try {
let mentees = await db.Users.findAll({where: {role:'mentee'}})
  .then((results) => {
    res.send(results)
  })
} catch (error) {
  return res.status(423).json({ err })
}
 
})

//! get a list of all mentors /* mentor GET route */
router.get('/mentor', async (req, res) => {
  try {
    let mentors = await db.Users.findAll({ where: { role: 'mentor' } })
      console.log(mentors)
      .then((results) => {
        res.send(results)
      })
  } catch (error) {
    return res.status(423).json({ error })
  }

})

//! update a user info /* update POST route */
router.post('/updateUser', async (req, res)=>{
let {id, firstName, lastName, email, password, description, mediaURL,linkedinURL, gender} = req.body
  try {
    const user = await db.users.update({ firstName, lastName, email, password, description, mediaURL, linkedinURL, gender },
      { where: { id: id } })
    res.json(user)
  } catch (error) {
    console.log(error)
    res.json({ message: "there was an error", error: error })
  }
})

//! delete user, send user id from front-end /* delete POST route */
router.post('/users', async (req, res)=>{
  let { id } = req.body
  try {

    const user = await db.users.destroy({ where: { id: id } })
    res.json(user)
  } catch (error) {
    console.log(error)
    res.json({ message: "there was an error", error: error })
  }
})

/* Admin delete POST route */
router.post('/', (req, res)=>{

  res.render('')
})



module.exports = router;


// /* template route */
/*  */
// router.get('/', (req, res)=>{

//   res.render('')
// })


// router.get('/', function(req, res, next) {
  //   res.send('respond with a resource');
  // });

