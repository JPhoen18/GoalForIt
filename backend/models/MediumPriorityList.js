import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let MediumPriorityList = new Schema({

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


export default mongoose.model('MediumPriorityList', MediumPriorityList, 'MediumPriorityList');
