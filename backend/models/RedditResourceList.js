import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let RedditResourceList = new Schema({


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


export default mongoose.model('RedditResourceList', RedditResourceList, 'RedditResourceList');
