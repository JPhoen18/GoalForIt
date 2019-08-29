var MongoClient = require('mongodb').MongoClient; // added
var url = "mongodb://localhost:27017/mydb"; //addeds

const https = require('https')
const SUBSCRIPTION_KEY = 'c62c07d005e145db9caaf900d2d08ca8'//process.env['c62c07d005e145db9caaf900d2d08ca8']
if (!SUBSCRIPTION_KEY) {
  throw new Error('Missing the AZURE_SUBSCRIPTION_KEY environment variable')
}
function bingWebSearch(query) {
  https.get({
    hostname: 'api.cognitive.microsoft.com',
    path:     '/bing/v7.0/search?q=' + encodeURIComponent(query) + '&count=30',
    headers:  { 'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY },
  }, res => {
    let body = ''
    res.on('data', part => body += part)
    res.on('end', () => {
      for (var header in res.headers) {
        if (header.startsWith("bingapis-") || header.startsWith("x-msedge-")) {
          console.log(header + ": " + res.headers[header])
        }
      }
      console.log('\nJSON Response:\n')
    //  console.dir(JSON.parse(body), { colors: false, depth: null })
      //var info = JSON.stringify(body)
     //console.log((body))//, { colors: false, depth: null })
     MongoClient.connect(url, function(err, db) {
        if (err) throw err
       var dbo = db.db("mydb")
       dbo.createCollection("HugeResource")
       var myobj = JSON.parse(body)
       console.dir(myobj, { colors: false, depth: null })
       //console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
       var y;
       for( y=0; y<20; y++){
       //console.dir(myobj["webPages"]["value"][y]["name"], { colors: false, depth: null })
       //console.dir(myobj["webPages"]["value"][y]["url"], { colors: false, depth: null })
       //console.dir(myobj["webPages"]["value"][y]["snippet"], { colors: false, depth: null })

       dbo.collection("Resource").insertOne({
         title: myobj["webPages"]["value"][y]["name"],
         URL: myobj["webPages"]["value"][y]["url"],
         Summary: myobj["webPages"]["value"][y]["snippet"]
       },{upsert:true})
    //   console.log("//  Post Prog //")
    //   console.log("1 document inserted");
     }
       //Need to create schema and import it into list in resource page
    //   dbo.collection("HugeResource").insertOne(myobj, function(err,res){
    //     if (err) throw err;
        // console.log("1 document inserted");
         db.close();
        // This code works to store bing search
       })



    })
    res.on('error', e => {
      console.log('Error: ' + e.message)
      throw e
    })
  })
}
module.exports = {

 bingGoalSearch : function(search){
const query = process.argv[2] || search// 'Learn to program'
console.log("Whaaaaaaaaaaaaaat?")
console.log(process.argv[1])

bingWebSearch(query).catch({statusCode: 429}, function() {})

}

}
