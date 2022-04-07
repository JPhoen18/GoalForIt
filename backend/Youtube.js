// this works.  How to get thumbnails??
//MaxGfeller/youtube-search
import mongoclient from 'mongodb';
var MongoClient = mongoclient.MongoClient;
///var MongoClient = require('mongodb').MongoClient; // added
var url = "mongodb://localhost:27017/mydb"; //addeds

import youTube from 'simple-youtube-api';
const youtube = new youTube('AIzaSyAMoSpW9UtWCJ3Pp8_uk7llIqyqaMCummA');
//var search = require('youtube-search');
//var key='AIzaSyBXSN_4P2nuCAO_P9U3Ltr-uRrIEWQHv6M';

//var opts = {
//  maxResults: 20,
//  key : 'AIzaSyAogcpOHWq0015b0r6hqytCOfCfJIS_N4Y',
//  order: 'viewCount',
//  type: 'video',

//};
var videoArray = [1]; //array for the video(s)
console.log("Check the values in video Array: ");
console.log(videoArray);

const yts = {
  youtubeSearch(youtubesearch, fn){
//search(youtubesearch, opts, function(err, results) {
//  if(err) return console.log(err);
youtube.searchVideos(youtubesearch, 20)
   .then(results => {

  console.log("Here are the results of the youtube search")
  console.dir(results);

  //MongoClient.connect(url, async function(err, db) {
  //   if (err) throw err
  //  var dbo = db.db("mydb")
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

//** Instead of inserting resources into database, save them into an array, send them back to the services, save them
//in the local storage.  Fetch them in the resource(s) components.

    //await dbo.collection("VideoResource").insertOne({
    //  title: results[y]["title"],
    //  channelTitle: results[y]["channelTitle"],
    //  URL: results[y]["link"],
    //  description : results[y]["description"]

  //  }, {upsert:true})
  //  console.log("//  Post Prog //")
  //  console.log("Videos")
  //  console.log("1 document inserted");
  console.log("thumbnail display");
console.log(`https://www.youtube.com/watch?v=${results[y]["id"]}`);
    if(videoArray[0] == 1){
               videoArray[0] = {
                 "title": results[y]["title"],
                 "channelTitle": results[y]["channelTitle"],
                 "URL": results[y]["thumbnails"]["default"].url,
                 "link": `https://www.youtube.com/watch?v=${results[y]["id"]}`,
                 "description" : results[y]["description"]
               };

               continue;

            }
            videoArray = videoArray.concat({
              "title": results[y]["title"],
              "channelTitle": results[y]["channelTitle"],
              "URL": results[y]["thumbnails"]["default"].url,
              "link": `https://www.youtube.com/watch?v=${results[y]["id"]}`,
              "description" : results[y]["description"]
            });
  }
  console.log("Here is the video array with all the videos");
  console.log(videoArray);
 return videoArray;
}
  catch(err){
    console.log(err);
  }


    //  db.close();
     // This code works to store bing search
  //    })

    })
    //.catch(console.log)
    //return value of yts
    .then(res=>{
    console.log("Array before the send back")
    console.log(res);
    videoArray = [1];
    fn(res);
  });

  }

}

export default yts;
