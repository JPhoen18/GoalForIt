import MongoCli from 'mongodb';
var MongoClient = MongoCli.MongoClient; // added
var url = "mongodb://localhost:27017/mydb"; //addeds

import snoowrap from 'snoowrap';

var r = new snoowrap({
  userAgent: 'webapp:localhost:v7 (by /u/JNPhoenix)',   //change this string to be more distinguished
  //accessToken: '113225775372-WmwSwy0GT0Ry_eWtYcAVTPYyjVI'
  clientId: 'rR8tjog_aWEOOQ',
  clientSecret: '7Uze43JZlRfHEVoL54zHZjrdr3o',
  //refreshToken: '113225775372-87UfyoY16mvSIamxj8BKGWAafPs',
  username: 'JNPhoenix',
  password: 'Kind2020!'
});


const rps = {

 redditPostSource(goaltitle, func){
   console.log(goaltitle);
   console.log("goal title");
   //.getSubreddit('snoowrap').search({query: 'blah', sort: 'year'})
var forumposts = r.search({query:goaltitle, sort:"relevance" }).catch({statusCode: 429}, function() {})
//console.log(forumposts);
//r.search({query: 'I want to learn how to program'}).then(console.log);


//**12/1 - perhaps place this function outside the rps
 function saveReddits(){
   var redditArray = [1];
  for(var x = 0; x < 2; x++){

//forumposts = JSON.stringify(forumposts[x]['id'].then(console.log));
//var replies = String(forumposts[x]['id']);
//console.log(JSON.stringify(forumposts[x]['id']))
//console.log(typeof forumposts[x]['id']);
   forumposts[x]['id'].then(resp => r.getSubmission(resp).expandReplies({limit: Infinity, depth: Infinity}).then(async function(output) {
  //console.log("Debug Reddit " + x);
  var commentsection = output['comments'];
  var displayname =  output['comments'][1]['subreddit']['display_name'];
  var commentlength = output['comments'].length;

  //console.log('commentsection');
  //console.log(commentsection);

//  console.log('displayname');
//  console.log(displayname);
  //console.log("---------");
//MongoClient.connect(url,async function(err, db) {
//   if (err) throw err
//  var dbo = db.db("mydb")
//  var myobj = JSON.parse(body)
//  console.dir(myobj, { colors: false, depth: null })
//  console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
//  var y;
  for(var t=0; t < commentlength; t++ ){
    console.log('var t');
    console.log(t);
      try{
          if(typeof output['comments'][t] == undefined){
            break;
          }
          if(typeof output['comments'][t] != undefined){

            if(redditArray[0] == 1){
                redditArray[0] = {
                "title": output["title"],
                "channelTitle": output['comments'][t]['subreddit']['display_name'],
                "description" : output['comments'][t]['body']
              };
              console.log("Reddit Array")
              console.log(redditArray)
              continue;

              }

            redditArray = redditArray.concat({
              "title": output["title"],
              "channelTitle": output['comments'][t]['subreddit']['display_name'],
              "description" : output['comments'][t]['body']
            });
            console.log("Reddit Array")
            console.log(redditArray)

            if(x == 2 && t == commentlength - 1){
               callReddit(redditArray);
               break;
             }

          }

        }
        catch(err){
          console.log(err);
          continue;
        }

      } //end of inner for loop

    })) //end of chained promises for reddit filtering on line 30
//    console.log("Reddit Array Final")
//    console.log(redditArray)
//    fx(redditArray);
} // end of outer for loop

//  console.log("Here is the video array with all the videos");
//  console.log(redditArray);
//  return redditArray;
} // end of saveReddits function

saveReddits();
function callReddit(res){
  console.log("Here is the reddit array");
  console.log(res);
  func(res);
}


//   console.log("Here is the reddit array with all the reddit posts");
//   console.log(res);
//   func(redditArray);
//   });

//function holler(res){ //not sure if this is actually working. check when I come back 12/1/20
//  console.log("Here is the reddit array with all the reddit posts");
//  console.log(res);
//  func(redditArray);
//s}

  }
}

export default rps;
//let value = forumposts[x]['id'].then((values)=>{
  //return values;
//});
//console.log("Here it is:");
//console.log(value);
//forumposts[x]['id'].then(console.log);
//console.log(forumposts.then(console.log));
//adhk5o
//r.getSubmission(forumposts[x]['id']).expandReplies({limit: Infinity, depth: Infinity}).then(console.log);
//}
//r.getSubmission(String(forumposts[0]['id'])).expandReplies({limit: Infinity, depth: Infinity}).then(console.log);


//r.search({query: 'I want to learn how to program'}).getSubmission().then(console.log);//expandReplies({limit: Infinity, depth: Infinity}).then(console.log); //use reddit ID for field r.get...
//console.log("_ = ___ + ---------------------------------------")
//for(var c=0; c<10; c++){
  //console.dir(forumposts[c]['id'], { colors: false, depth: null })


//r.search({query: 'programming'}).then(console.log)

//Perhaps order forum posts by relevance, date, no more than 5 generated.
//Contain links to reddit subreddit forum, title, etc.
