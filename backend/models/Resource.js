var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Resource = new Schema({


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

export default mongoose.model('Resource', Resource, 'Resource');
