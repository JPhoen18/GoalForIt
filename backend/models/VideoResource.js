var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VideoResource = new Schema({


    title: {
      type: String
    },

    channelTitle: {
      type: String
    },

    URL: {
      type: String
    },

    description: {
      type: String
    }

});

export default mongoose.model('VideoResource', VideoResource, 'VideoResource');
