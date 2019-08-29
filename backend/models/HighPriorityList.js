let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HighPriorityList = new Schema({

 Title: {
   type: String
 },
 AuthorURL: {
   type: String
 },
 Content: {
   type: String
 }

});

//mongoose.model('HighPriorityList', HighPriorityList);
//module.exports = mongoose.model("HighPriority", HighPriorityList);

export default mongoose.model("HighPriorityList", HighPriorityList, "HighPriorityList");  //, 'HighPriorityList');

//const HighPriorityListSchema =  mongoose.model('HighPriorityList', HighPriorityList, 'HighPriorityList');
//module.exports = HighPriorityListSchema;
