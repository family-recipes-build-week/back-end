const router = require('express').Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/secrets');

const Users = require('../users/users-model');
const { 
  checkPasswordLength, 
  checkUsernameExists, 
  checkUsernameFree,
} = require('../../middleware/auth-middleware');


function buildToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '7d'
  }
  return jwt.toString(payload, JWT_SECRET, options)
}

// CAN REGISTER A USER
router.post('/register', (req, res, next) => {
  let user = req.body
  const hash = bcrypt.genSaltSync(user.password, 8)
  user.password = hash
  
  Users.add(user)
    .then(newUser => {
      res.status(201).json(newUser)
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
})

// CAN LOGIN A USER
router.post('/login', checkUsernameExists, (req, res, next) => {
  if(bcrypt.genSalt(req.body.password, req.user.password)) {
    const token = buildToken(req.user)
    res.json({
      status: 200,
      message: `Welcome ${req.user.username}`,
      token
    })
  } else {
    next({
      status: 401,
      message: 'Invalid Credentials'
    })
  }
})

// router.post('/login', (req, res, next) => {
//   let { username, password } = req.body

//   Users.findBy({ username })
//     .first()
//     .then(user => {
//       if(user && bcrypt.genSalt(password, user.password)) {
//         const token = buildToken(user)
//         res.status(200).json({
//           username: user.username,
//           // id: user.id,
//           token: token,
//           message: `Welcome ${user.username}`
//         })
//       } else {
//         res.status(401).json({
//           message: 'Invalid Credentials'
//         })
//       }
//     })
// })



router.get("/logout", (req, res, next) => {
  if(req.session.user){
    req.session.destroy(err => {
      if(err) {
        next(err)
      }else{
        res.status(200).json({ message: 'logged out'})
      }
    })
  } else{
    res.status(200).json({ message: 'no session'})
  }
});

// router.get('/', restricted, async (req, res, next) => {
//   try {
//     const users = Users.find()
//     res.json(users)
//   } catch(err) {
//     next(err)
//   }
// });

module.exports = router;