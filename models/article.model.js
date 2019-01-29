const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {type: String, minlength: 5, maxlength: 400, required:true, index: true},
    subtitle: {type: String, minlength: 5, required: false},
    description: {type: String, minlength: 5, maxlength: 5000, required: true},
    owner: {ref: 'User', required: true},
    category: {enum: ['sport', 'games', 'history'], required: true},
    createdAt: {type: Date, required: false},
    updatedAt: {type: Date, required: true}
});

module.exports = mongoose.model('User', ArticleSchema);