 var mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const HighPriorityListSchema = mongoose.model('./HighPriorityList');
//const MediumPriorityListSchema = mongoose.model('MediumPriorityList').schema;
//const LowPriorityListSchema = mongoose.model('LowPriorityList').schema;

var HighPriorityList = require('../models/HighPriorityList.js');
//import HighPriorityList from './HighPriorityList';
var MediumPriorityList = require('../models/MediumPriorityList.js');
var LowPriorityList = require('../models/LowPriorityList.js');
//import MediumPriorityList from './MediumPriorityList';
//import LowPriorityList from './LowPriorityList';


//const HighPriorityListSchema = HighPriorityList.schema;
//const MediumPriorityListSchema = MediumPriorityList.schema;
//const LowPriorityListSchema = LowPriorityList.schema;
//const MediumPriorityListSchema = require('./HighPriorityList');
//var MedPriList = new MediumPriorityListSchema();
//const LowPriorityListSchema = require('./LowPriorityList').schema;

let Goals = new Schema({

  goalTitle: {
    type: String
  },

  description: {
    type: String
  },

  goalCreationDate: {
    type: Date
  },

  goalDueDate:  {
    type: Date
  },

  HighPriority: {
    type: [HighPriorityList.schema]
     //type: Schema.Types.ObjectID, ref:'HighPriorityListSchema'
  },

  MediumPriority:  {
    type: [MediumPriorityList.schema]
    //type: Schema.Types.ObjectID, ref:'MediumPriorityListSchema'

  },

  LowPriority: {
    type: [LowPriorityList.schema]
    // type: Schema.Types.ObjectID, ref:'LowPriorityListSchema'

  }


});

//export default mongoose.model('Goals', Goals, 'Goals');
var GoalSchema = mongoose.model('GoalSchema', Goals);
module.exports = GoalSchema;
//module.exports = Goals;
