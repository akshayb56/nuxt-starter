const router = require('express').Router();
const Users = require('../../models/users');

const { asyncWrap } = require('../helpers/general');


router.get('/user', asyncWrap(async (req, res) => {
  // let user = await Users.findById(req.params.id, { email: 0 });
  let user = { name: 'Akshay' };
  return res.send(user);
}));

module.exports = router;