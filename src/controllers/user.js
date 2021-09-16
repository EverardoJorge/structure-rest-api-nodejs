const UserModel = require('../models/user');
const {httpError} = require('../helpers/handleError');

const getUsers = async(req, res) => {
    await UserModel.find()
                .exec()
                .then((users) => {
                        res.status(200).json({data:{success: true, users}});
                    })
                    .catch((e) => {
                        httpError(res, e);
                    });
};

const getUser = (req, res) => {
    const userID = req.params.user_id;
    if (!userID) {
        httpError(res, 'ID INVALID');
    }
    UserModel.findById(userID).exec()
                .then(user => {
                    res.status(200).json({data_user: [user]});
                })
                .catch(e => {
                    httpError(res, 'CALL TO PROGRAMMER');
                });
};

const createUser = async(req, res) => {
    try {
        const {username, age, email, password} = req.body;
        const NEW_USER = new UserModel({username, age, email, password});
        await NEW_USER.save().then(new_user => {
            res.status(200).json({data:{petition_success: true, new_user}});
        });
    } catch (error) {
        httpError(res, error);
    }
};
const updateAllUser = (req, res) => {

};

const updateDetailUser = (req, res) => {

};

const deleteUser = (req, res) => {

};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateAllUser,
    updateDetailUser,
    deleteUser
};