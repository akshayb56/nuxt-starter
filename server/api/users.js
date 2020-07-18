const router = require('express').Router();
const Users = require('../../models/users');

const { asyncWrap } = require('../helpers/general');


router.get('/user/:id', asyncWrap(async (req, res) => {
  let user = await Users.findById(req.params.id, { email: 0 });
  return res.send(user);
}));

module.exports = router;