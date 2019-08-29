var MongoClient = require('mongodb').MongoClient; // added
var url = "mongodb://localhost:27017/mydb"; //addeds

var snoowrap = require('snoowrap');

var r = new snoowrap({
  userAgent: 'webapp:localhost:v7 (by /u/JNPhoenix)',   //change this string to be more distinguished
  //accessToken: '113225775372-WmwSwy0GT0Ry_eWtYcAVTPYyjVI'
  clientId: 'rR8tjog_aWEOOQ',
  clientSecret: '7Uze43JZlRfHEVoL54zHZjrdr3o',
  //refreshToken: '113225775372-87UfyoY16mvSIamxj8BKGWAafPs',
  username: 'JNPhoenix',
  password: 'Newmove18!'
});
module.exports = {
 redditPostSource : function(goaltitle){
var forumposts = r.search({query:goaltitle }).catch({statusCode: 429}, function() {})
//r.search({query: 'I want to learn how to program'}).then(console.log);

for(var x = 0; x < 2; x++){
//forumposts = JSON.stringify(forumposts[x]['id'].then(console.log));
//var replies = String(forumposts[x]['id']);
//console.log(JSON.stringify(forumposts[x]['id']))
//console.log(typeof forumposts[x]['id']);
forumposts[x]['id'].then(resp => r.getSubmission(resp).expandReplies({limit: Infinity, depth: Infinity}).then(function(output) {
console.log("Debug Reddit")
console.log(output)
MongoClient.connect(url, function(err, db) {
   if (err) throw err
  var dbo = db.db("mydb")
  dbo.createCollection("HugeResource")
//  var myobj = JSON.parse(body)
//  console.dir(myobj, { colors: false, depth: null })
  console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
  var y;
  for(var t=0; t <8; t++ ){
try{
   if(typeof output['comments'][t]['body'] != undefined){

//  console.log(output['title']);
//  console.log("----------------")
//  console.log(output['comments'][t]['author']['name']);
//  console.log("----------------")
//  console.log(output['comments'][t]['body']);
//  console.log("----------------")

  dbo.collection("RedditResource").insertOne({
    RedditTitle: output['title'],
    RedditAuthor: output['comments'][t]['author']['name'],
    AuthorResponse: output['comments'][t]['body']
  },{upsert:true})
//  console.log("//  Post Prog //")
//  console.log("1 document inserted");



  }
}
catch(err){
  console.log(err);
}
//sleep(100);

}

db.close();
  //console.log(output[t]['url']);
  //console.log(output[t]['body']);
  console.log("-------------------");
  //console.log(output);
  //console.log(typeof output);
});

}))
}
}
}
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
