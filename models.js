'use strict';

const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {
    firstName: String,
    lastName: String,
    required: true
  },
  publishDate: {type: String},
});

blogPostSchema.virtual('nameString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});


blogPostSchema.methods.serialize = function() {
  return {
    id: this._id,
    author: this.nameString,
    title: this.title,
    content: this.content,
    publishDate: this.publishDate
  };
}


const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {BlogPost};