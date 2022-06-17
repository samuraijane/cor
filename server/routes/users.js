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

/* mentee GET route */
router.get('/', (req, res)=>{

  res.render('')
})

/* mentor GET route */
router.get('/', (req, res)=>{

  res.render('')
})

/* update POST route */
router.post('/updateUser', (req, res)=>{

  res.render('')
})

/* delete POST route */
router.post('/', (req, res)=>{

  res.render('')
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

