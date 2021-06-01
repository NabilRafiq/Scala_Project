const express = require('express');
const upload = require('../utils/multer');
const User = require('../models/user');
const auth = require('../middlewares/auth');

const router = new express.Router();

// Get all users
router.get('/users', auth.enhance, async (req, res) => {
  if (req.user.role !== 'superadmin')
    return res.status(400).send({
      error: 'Only the god can see all the users!',
    });
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.username, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send({
      error: { message: 'invalid username or password' },
    });
  }
});





//create

router.post('/users/login/google', async (req, res) => {
  const { email, googleId, name } = req.body;
  const nameArray = name.split(' ');

  const user = await User.findOne({ google: googleId });
  if (!user) {
    const newUser = new User({
      name,
      username: nameArray.join('') + googleId,
      email,
      google: googleId,
    });
    try {
      await newUser.save();
      const token = await newUser.generateAuthToken();
      res.status(201).send({ user: newUser, token });
    } catch (e) {
      res.status(400).send(e);
    }
  } else {
    const token = await user.generateAuthToken();
    res.send({ user, token });
  }
});

// Logout user
router.post('/users/logout', auth.simple, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send({});
  } catch (e) {
    res.status(400).send(e);
  }
});









// Admin can update user by id
router.patch('/users/:id', auth.enhance, async (req, res) => {
  if (req.user.role !== 'superadmin')
    return res.status(400).send({
      error: 'user cannot be updated',
    });
  const _id = req.params.id;

  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'phone', 'username', 'email', 'password', 'role'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' });

  try {
    const user = await User.findById(_id);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    if (!user) return res.sendStatus(404);
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete by id
router.delete('/users/:id', auth.enhance, async (req, res) => {
  if (req.user.role !== 'superadmin')
    return res.status(400).send({
      error: 'user cannot be deleted',
    });
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) return res.sendStatus(404);

    res.send({ message: 'User Deleted' });
  } catch (e) {
    res.sendStatus(400);
  }
});



module.exports = router;
