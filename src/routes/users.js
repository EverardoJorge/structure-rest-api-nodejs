const express = require('express');
const router = express.Router();
const {getUsers, getUser, createUser, updateAllUser, updateDetailUser, deleteUser} = require('../controllers/user');

router.get('/', getUsers);
router.get('/:user_id', getUser);
router.post('/', createUser);
router.put('/:user_id', updateAllUser);
router.patch('/:user_id', updateDetailUser);
router.delete('/:user_id', deleteUser);

module.exports = router;