module.exports = {createArticle, updateArticle, getArticle, deleteArticle};

const Article = require('../models/article.model');

function createArticle(req, res, next) {
    let article = new Article({
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        owner: req.body.owner,
        category: req.body.category,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });
    article.save(err => {
        if (err) {
            return next({
                status: 400,
                error: err,
            })
        }
        res.send('Article was added successfully');
    })
}

function updateArticle(req, res, next) {
    Article.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
        if (err) return next({
            status: 400,
            error: err
        });
        res.send('Article was successfully updated.');
    });
}

function getArticle(req, res, next) {
    Article.findById(req.params.id, function (err, user) {
        if (err) return next({
            status: 404,
            error: err,
        });
        res.send(user);
    })
}

function deleteArticle(req, res, next) {
    Article.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next({
            status: 400,
            error: err,
        });
        res.send('Article was successfully deleted!');
    })
}