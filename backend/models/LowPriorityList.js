import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let LowPriorityList = new Schema({

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


export default mongoose.model('LowPriorityList', LowPriorityList, 'LowPriorityList');
