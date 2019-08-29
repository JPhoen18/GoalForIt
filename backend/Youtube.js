// this works.  How to get thumbnails??
//MaxGfeller/youtube-search
var MongoClient = require('mongodb').MongoClient; // added
var url = "mongodb://localhost:27017/mydb"; //addeds

var search = require('youtube-search');
var key='AIzaSyBj-apnBOGu9ZCm_T23BURTfkPSesHseGk';
var opts = {
  maxResults: 20,
  key,
  order: 'viewCount',
  type: 'video',

};

module.exports = {
 youtubeSearch : function(youtubesearch){
search(youtubesearch, opts, function(err, results) {
  if(err) return console.log(err);


  console.dir(results);
  MongoClient.connect(url, function(err, db) {
     if (err) throw err
    var dbo = db.db("mydb")
    dbo.createCollection("HugeResource")
    //var myobj = JSON.parse(results)
    //console.dir(myobj, { colors: false, depth: null })
  //  console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
    var y;
    try{
    for( y=0; y<20; y++){
  //  console.dir(results[y]["title"], { colors: false, depth: null })
  //  console.dir(results[y]["channelTitle"], { colors: false, depth: null })
  //  console.dir(results[y]["link"], { colors: false, depth: null })
  //  console.dir(results[y]["description"], { colors: false, depth: null })

    dbo.collection("VideoResource").insertOne({
      title: results[y]["title"],
      channelTitle: results[y]["channelTitle"],
      URL: results[y]["link"],
      description : results[y]["description"]

    }, {upsert:true})
    console.log("//  Post Prog //")
    console.log("Videos")
    console.log("1 document inserted");
  }}
  catch(err){
    console.log(err);
  }
    //Need to create schema and import it into list in resource page
  //   dbo.collection("HugeResource").insertOne(myobj, function(err,res){
  //     if (err) throw err;
     // console.log("1 document inserted");
      db.close();
     // This code works to store bing search
    })



});
}
}
