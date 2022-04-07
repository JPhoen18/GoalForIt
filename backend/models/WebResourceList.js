import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let WebResourceList = new Schema({


    title: {
      type: String
    },

    URL: {
      type: String
    },

    Summary: {

      type: String
    }

});

export default mongoose.model('WebResourceList', WebResourceList, 'WebResourceList');
