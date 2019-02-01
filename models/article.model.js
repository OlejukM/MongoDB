const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {type: String, minlength: 5, maxlength: 400, required: true, useCreateIndex: true},
    subtitle: {type: String, minlength: 5, required: false},
    description: {type: String, minlength: 5, maxlength: 5000, required: true},
    owner: { type: Schema.Types.ObjectId, minlength: 5, maxlength: 1000, required: true},
    category: {enum:['sport', 'games', 'history']},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true}
});

module.exports = mongoose.model('Article', ArticleSchema);