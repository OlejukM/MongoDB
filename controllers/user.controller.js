module.exports = {createUser, updateUser, getUser, deleteUser};

const User = require('../models/user.model');

function createUser(req, res, next) {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        createdAt: req.body.createdAt,
        numberOfArticles: req.body.numberOfArticles,
        nickname: req.body.nickname
    });
    user.save(err => {
        if (err) {
            return next({
                status: 400,
                error: err,
            })
        }
        res.send('User was added successfully');
    })
}

function updateUser(req, res, next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
        if (err) return next({
            status: 400,
            error: err
        });
        res.send('User was successfully updated.');
    });
}

function getUser(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next({
            status: 404,
            error: err,
        });
        res.send(user);
    })
}

function deleteUser(req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next({
            status: 400,
            error: err,
        });
        res.send('User was successfully deleted!');
    })
}