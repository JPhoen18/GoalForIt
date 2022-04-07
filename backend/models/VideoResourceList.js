import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let VideoResourceList = new Schema({


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

export default mongoose.model('VideoResourceList', VideoResourceList, 'VideoResourceList');
