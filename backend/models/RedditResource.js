import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let RedditResource = new Schema({


  RedditTitle: {
    type: String
  },

  RedditAuthor: {
    type: String
  },

  AuthorResponse: {
    type: String
  }

});


export default mongoose.model('RedditResource', RedditResource, 'RedditResource');
