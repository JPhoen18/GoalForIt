import mongoclient from 'mongodb';
var MongoClient = mongoclient.MongoClient;
//var MongoClient = require('mongodb').MongoClient; // added
var url = "mongodb://localhost:27017/mydb"; //addeds

import https from 'https';
//const https = require('https')
const SUBSCRIPTION_KEY = 'c62c07d005e145db9caaf900d2d08ca8'//process.env['c62c07d005e145db9caaf900d2d08ca8']
if (!SUBSCRIPTION_KEY) {
  throw new Error('Missing the AZURE_SUBSCRIPTION_KEY environment variable')
}
 function bingWebSearch(query, bingfunc) {
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

      var myobj = JSON.parse(body);

       var bingArticleArray = [1];
       for(var y=0; y<20; y++){
       //console.dir(myobj["webPages"]["value"][y]["name"], { colors: false, depth: null })
       //console.dir(myobj["webPages"]["value"][y]["url"], { colors: false, depth: null })
       //console.dir(myobj["webPages"]["value"][y]["snippet"], { colors: false, depth: null })
       if(myobj["webPages"]["value"][y] != undefined){
             if(bingArticleArray[0] == 1){
               bingArticleArray[0] = {
                  "title": myobj["webPages"]["value"][y]["name"],
                  "URL": myobj["webPages"]["value"][y]["url"],
                  "Summary": myobj["webPages"]["value"][y]["snippet"]
                }
                continue;
             }

             bingArticleArray = bingArticleArray.concat({
                "title": myobj["webPages"]["value"][y]["name"],
                "URL": myobj["webPages"]["value"][y]["url"],
                "Summary": myobj["webPages"]["value"][y]["snippet"]
              });

       }

       if(y==19){
          console.log("Here is the array");
          console.log(bingArticleArray);
          returnArticles(bingArticleArray, bingfunc);
       }

        }

    })

    res.on('error', e => {
      console.log('Error: ' + e.message)
      throw e
    })

  })
}

function returnArticles(res, bingfunc){
    //callback function to send articles back to the web articles component//
    console.log('Here are the bing articles!');
    console.log(res);
    bingfunc(res)

     }


const bgs = {
  bingGoalSearch(search, bingfunc){
const query = process.argv[2] || search// 'Learn to program'
console.log("Whaaaaaaaaaaaaaat?")
console.log(process.argv[1])

//bingWebSearch(query).catch({statusCode: 429}, function() {})
try{
  bingWebSearch(query, bingfunc);
}
catch(err){
  console.log(err);
}

   }
}
export default bgs;
