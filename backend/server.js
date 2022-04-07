import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import stringify from 'json-stringify-safe';
//require('./passportConfig');
import passconfig from './passportConfig.js';
import redditApi from './Reddit.js';
import youtubeApi from './Youtube.js';
import bingApi from './Bing.js'; //left off debugging here 10/15/20
import ObjectID from 'mongodb';
const ObjectId = ObjectID.ObjectId;


import Resource from './models/Resource.js'
import VideoResource from './models/VideoResource.js'
import RedditResource from './models/RedditResource.js'
import VideoResourceList from './models/VideoResourceList.js'
import WebResourceList from './models/WebResourceList.js'
import RedditResourceList from './models/RedditResourceList.js'
import HighPriorityList from './models/HighPriorityList.js'
import MediumPriorityList from './models/MediumPriorityList.js'
import LowPriorityList from './models/LowPriorityList.js'
import UserAccount from './models/UserAccount.js'
import Goals from './models/Goals.js'


const app = express();
const router = express.Router();
import passport from 'passport';
//const passport = require('passport');
import ctrlUser from '../backend/controllers/user.controller.js';
//const ctrlUser = require('../backend/controllers/user.controller');
import jwtHelper from '../backend/jwtHelper.js';
//const jwtHelper = require('../backend/jwtHelper.js');


//middleware
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.json({limit:'50mb'}));
const connection = mongoose.connection;
//mongoose.connect('mongodb://127.0.0.1:27017/mydb');  //resources
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });  //resources

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/mydb').get((req, res)=> {
//  var db = res.db('mydb')

//  db.collection(Resource).find().toArray(function (err, resources){
  Resource.find((err, resources) =>{
    if (err)
        console.log(err);
    else
        res.json(resources);
      });
});

router.route('/mydb/vidresources').get((req, res)=> {
//  var db = res.db('mydb')

//  db.collection(Resource).find().toArray(function (err, resources){
try{
  VideoResource.find((err, resources) =>{
    if (err)
        console.log(err);
    else
        res.json(resources);
      });
    }
    catch(err){
      console.log(err);
    }
});

router.route('/mydb/forumresources').get((req, res)=> {
//  var db = res.db('mydb')

//  db.collection(Resource).find().toArray(function (err, resources){
  RedditResource.find((err, resources) =>{
    if (err)
        console.log(err);
    else
        res.json(resources);
      });
});


router.route('/mydb/createUserAccount').post((req, res)=>{
    let userAccount = new UserAccount(req.body);
      connection.collection("UserAccount").insertOne(userAccount)
        .then(userAccount=>{
          res.status(200).json({'userAccount': 'userAccount added successfully' })
        }).catch(err => {
          res.status(400).send("unable to save userAccount to Database");
        });

});

router.route('/mydb/saveRedditPosts').post((req,res)=>{
    let redditResource = new RedditResource(req.body);
    connection.collection("RedditResourceList").insertOne(redditResource)
      .then(redditResource=>{
        res.status(200).json({'redditResource': 'redditResource added successfully' })
      }).catch(err => {
          res.status(400).send("unable to save redditResource to Database");
        });

});

router.route('/mydb/saveWebResources').post((req,res)=>{
    let resource = new Resource(req.body);
    connection.collection("WebResourceList").insertOne(resource)
      .then(resource=>{
        res.status(200).json({'webResource': 'webResource added successfully' })
      }).catch(err => {
          res.status(400).send("unable to save webResource to Database");
        });

});

router.route('/mydb/saveVidResources').post((req,res)=>{
    let vidResource = new VideoResource(req.body);
    connection.collection("VideoResourceList").insertOne(vidResource)
      .then(vidResource=>{
        res.status(200).json({'vidResource': 'vidResource added successfully' })
      }).catch(err => {
          res.status(400).send("unable to save vidResource to Database");
        });

});

router.route('/mydb/saveHighPriority').post((req,res)=>{
    let highPriority = new HighPriorityList(req.body);
    //connection.collection("HighPriorityList").createIndex({ 'Content':1}, {unique: true})
    connection.collection("HighPriorityList").insertOne(highPriority)
      .then(highPriority=>{
        res.status(200).json({'highPriority': 'highPriority element added successfully' })
      }).catch(err => {
          res.status(400).send("unable to save highPriority element to Database");
          console.log(err);

        });

});

router.route('/mydb/saveMediumPriority').post((req,res)=>{
    let mediumPriority = new MediumPriorityList(req.body);
    //connection.collection("MediumPriorityList").createIndex({'Title':1, 'AuthorURL':1, 'Content': 1}, {unique: true})

    //connection.collection("MediumPriorityList").createIndex({'Content':1 }, {unique: true})
    connection.collection("MediumPriorityList").insertOne(mediumPriority)
      .then(mediumPriority=>{
        res.status(200).json({'mediumPriority': 'mediumPriority element added successfully' })
      }).catch(err => {
          res.status(400).send("unable to save mediumPriority element to Database");
          console.log(err);
        });

});

router.route('/mydb/saveLowPriority').post((req,res)=>{
    let lowPriority = new LowPriorityList(req.body);
  //  connection.collection("LowPriorityList").createIndex({ 'Content':1}, {unique: true})
    connection.collection("LowPriorityList").insertOne(lowPriority)
      .then(lowPriority=>{
        res.status(200).json({'lowPriority': 'lowPriority element added successfully' })
      }).catch(err => {
          res.status(400).send("unable to save lowPriority element to Database");
          console.log(err);

        });

});

router.route('/mydb/goalInsert').post( (req, res) => {
      //console.log(req.body);
      let needLogged = req.body;
      console.log(needLogged.obj);
      try{
        console.log("Inserting the goal from server.js!")
       connection.collection("UserAccount").update(
        {email: needLogged.useremail}, {$push : {goals: needLogged.obj}}, {upsert:true}
      )
      console.log("Goal is safe in the goals!")
    }
      catch(err){
        console.log("Uh-oh no go!");
        console.log(err);
      }

});

router.route('/mydb/updateGoal').post((req, res) => {
      console.log(req.body);
      let goalEmailIndx = req.body;
      let goalIndx = goalEmailIndx.indx;
      try{
      connection.collection("UserAccount").update(
        {email:goalEmailIndx.email},
        {$set: { [`goals.${goalIndx}.goalSubGoal`]: goalEmailIndx.goalie.goalSubGoal}  //This works to update specific fields in array
        })
      }
      catch(err){
        console.log("Uh-oh no go!");
        console.log(err);
      }

})

router.route('/mydb/updateGoalResources').post((req, res) => {
      console.log(req.body);
      let goalEmailIndx = req.body;
      let goalIndx = goalEmailIndx.indx;
      console.log(goalEmailIndx.medpri);

      try{
      connection.collection("UserAccount").update(
        {email:goalEmailIndx.email},
        {$set: { [`goals.${goalIndx}.HighPriority`]: goalEmailIndx.highpri,  //This works to update specific fields in array
               [`goals.${goalIndx}.MediumPriority`]: goalEmailIndx.medpri,
               [`goals.${goalIndx}.LowPriority`]: goalEmailIndx.lowpri}
        })
      }
      catch(err){
        console.log("Uh-oh no go Resources!");
        console.log(err);
      }

})

router.route('/mydb/editGoal').post((req, res) => { //edit goal title, description, creationDate, dueDate
      //console.log(req.body);
      let goalindx = req.body;
      let goal = goalindx.editGoal;
    //  console.log(goal);
      let indx = goalindx.editindx;
      //console.log(indx)
      let email = goalindx.editemail;
      console.log(email);

      try{
        connection.collection("UserAccount").update(
          {email: email},
          {$set: { [`goals.${indx}.goalTitle`]: goal.goalTitle,
                    [`goals.${indx}.description`]: goal.description,
                    [`goals.${indx}.goalCreationDate`]: goal.goalCreationDate,
                    [`goals.${indx}.goalDueDate`]: goal.goalDueDate,
                    [`goals.${indx}.finishedOrNot`]: goal.finishedOrNot}}
        )
      }
      catch(err){
        console.log("Whoa there");
        console.log(err);
      }

})

router.route('/mydb/editSubGoal').post((req, res) => {
      let idSubIndx = req.body;
      let email = idSubIndx.email;
      let subgoal = idSubIndx.subgoal;
      let index = idSubIndx.goalindex;

      console.log(idSubIndx)

      try{
        connection.collection("UserAccount").update(
        {email: email},
        {$set: { [`goals.${index}.goalSubGoal`]: subgoal}})
      }
      catch(err){
        console.log("Whoa there");
        console.log(err);
      }
})

router.route('/mydb/deleteSubGoal').post((req, res) => {
  //subgoal, index, email
      let pckg = req.body;
      let subgoal = pckg.subgoal;
      let subindex = pckg.index;
      let subemail = pckg.email;

      console.log(pckg)

      try{
        connection.collection("UserAccount").update(
        {email: subemail},
        {$set: { [`goals.${subindex}.goalSubGoal`]: subgoal}})
      }
      catch(err){
        console.log("Whoa there");
        console.log(err);
      }

})

router.route('/mydb/deleteGoal').post((req, res) => {
  //subgoal, index, email
      let pckg = req.body;
      let goals = pckg.goal;
      let index = pckg.index;
      let email = pckg.email;

      console.log(pckg)

      try{
        connection.collection("UserAccount").update(
        {email: email},
        {$set: { [`goals`]: goals}})
      }
      catch(err){
        console.log("Whoa there");
        console.log(err);
      }

})

router.route('/mydb/deleteWebAfterNewGoal').get((req, res) => {


  Resource.deleteMany({}, (err, obj) =>{
      if (err){
      console.log("You screwed up")
      res.json(err);
    }
      else{
          console.log("Ah-hah just kidding")
          res.json(obj);
        }
    })

})
router.route('/mydb/deleteVideoAfterNewGoal').get((req, res) => {


  VideoResource.deleteMany({}, (err, obj) =>{
      if (err){
      console.log("You screwed up")
      res.json(err);
    }
      else{
          console.log("Ah-hah just kidding")
          res.json(obj);
        }
    })

})
router.route('/mydb/deleteRedditAfterNewGoal').get((req, res) => {


  RedditResource.deleteMany({}, (err, obj) =>{
      if (err){
      console.log("You screwed up")
      res.json(err);
    }
      else{
          console.log("Ah-hah just kidding")
          res.json(obj);
        }
    })

})
router.route('/mydb/deleteVideoResAfterNewGoal').get((req, res) => {


  VideoResourceList.remove({}, (err, obj) =>{
      if (err){
      console.log("You screwed up")
      res.json(err);
    }
      else{
          console.log("Ah-hah just kidding")
          res.json(obj);
        }
    })

})
router.route('/mydb/deleteWebResAfterNewGoal').get((req, res) => {


  WebResourceList.remove({}, (err, obj) =>{
      if (err){
      console.log("You screwed up")
      res.json(err);
    }
      else{
          console.log("Ah-hah just kidding")
          res.json(obj);
        }
    })

})
router.route('/mydb/deleteRedditResAfterNewGoal').get((req, res) => {


  RedditResourceList.remove({}, (err, obj) =>{
      if (err){
      console.log("You screwed up")
      res.json(err);
    }
      else{
          console.log("Ah-hah just kidding")
          res.json(obj);
        }
    })

})



router.route('/mydb/register').post((req, res) =>{ //This is not being called at all
  //Send the email and password from signup.component.html to this function
  //Return the encrypted password back to the signup to place into the database.
  console.log("Content to register!")
  console.log(req.body);
  try{
  ctrlUser.register(req.body);
  }
  catch(err){
    console.log(err)
  }
});

router.route('/mydb/authenticate').post((req, res, next) =>{

    console.log("Hello authenticate");
    //console.log(req.body);
    console.log(req.body);
    var mytoken;

    ctrlUser.authenticate(req, res, function(result) {  //Need to pass a callback to receive the return value
      console.log("Here it is");
      console.log(result);
      mytoken = result;
      console.log("Finally Back");
      console.log(mytoken);
      return res.json(mytoken);
      });

});

router.route('/mydb/userProfile').post((req, res) =>{
   //console.log("Trying to get a profile")
    //console.log(req.body);
    var userJWTID = jwtHelper.verifyJwtToken(req, res);
    //console.log("Return the info please!");
    //console.log(userJWTID._id); //Contains the id I need
    //call fcuntion to validate jwt token
    //var userprofile = ctrlUser.userProfile(userJWTID);
    var userinfo;
    ctrlUser.userProfile(userJWTID, res, function(response){
      console.log("User prof Info from server.js")
      console.log(response);
      userinfo = response;
      return res.json(userinfo);
    });

});

//This route sends the goal title to the 3 resource api's
router.route('/mydb/resourceWebCall/:goaltitleobj').get(async(req, res) =>{


    console.log("Info from req");
    console.log(JSON.parse(req.params.goaltitleobj));
    var goalTitle = JSON.parse(req.params.goaltitleobj).goaltitle;
    console.log(goalTitle);

try{
  await bingApi.bingGoalSearch(goalTitle, function(bingArticles){

    console.log("Youtube Api was called!")
    console.log(bingArticles);
    res.send(bingArticles);

  });
}
catch(err){
  console.log(err);
}

});

router.route('/mydb/resourceVidCall/:goaltitleObject').get(async(req, res) =>{
      console.log("Info from req");
      console.log(JSON.parse(req.params.goaltitleObject));
      var goalTitle = JSON.parse(req.params.goaltitleObject).goaltitle;
      console.log(goalTitle);

try{
    await youtubeApi.youtubeSearch(goalTitle, function(youVids){

      console.log("Youtube Api was called!")
      console.log(youVids);
      res.send(youVids);

    });

}
catch(err){
  console.log(err);
}


});


router.route('/mydb/resourceRedCall/:getRedObj').get(async (req, res) =>{
  console.log("Info from req");
  console.log(JSON.parse(req.params.getRedObj));
  var goalTitle = JSON.parse(req.params.getRedObj).goaltitle;
  console.log(goalTitle);

try{
  await redditApi.redditPostSource(goalTitle, function(redditSource){
    // 12/2/20 -- this finally worked
      console.log("Reddit Api was called!")
      console.log(redditSource);
      res.send(redditSource)
  });
}
catch(err){
  console.log(err);
}

});

// Next 3 routes are for getting Resource List Sources
router.route('/mydb/getRedditPosts').get((req, res)=> {
//  var db = res.db('mydb')

//  db.collection(Resource).find().toArray(function (err, resources){
  RedditResourceList.find((err, resources) =>{
    if (err)
        console.log(err);
    else
        res.json(resources);
      });
});

router.route('/mydb/getWebResources').get((req, res)=> {
//  var db = res.db('mydb')

//  db.collection(Resource).find().toArray(function (err, resources){
  WebResourceList.find((err, resources) =>{
    if (err)
        console.log(err);
    else
        res.json(resources);
      });
});

router.route('/mydb/getVidResources').get((req, res)=> {
//  var db = res.db('mydb')

//  db.collection(Resource).find().toArray(function (err, resources){
  VideoResourceList.find((err, resources) =>{
    if (err)
        console.log(err);
    else
        res.json(resources);
      });
});


router.route('/mydb/findHighPriority').get((req, res)=> {
   HighPriorityList.find((err, resources) =>{
    if (err)
      console.log(err);
    else
        res.json(resources);

      });
 });


 router.route('/mydb/findMediumPriority').get((req, res)=> {
    MediumPriorityList.find((err, resources) =>{
     if (err)
       console.log(err);
     else
         res.json(resources);

       });
  });

  router.route('/mydb/findLowPriority').get((req, res)=> {
     LowPriorityList.find((err, resources) =>{
      if (err)
        console.log(err);
      else
          res.json(resources);

        });
   });

   router.route('/mydb/findUserAccount/:userID').get((req, res)=> {
     let userID = req.params.userID;
     //let userINFO = {userid:user};
     console.log(userID);

    connection.collection("UserAccount").findOne({ _id : ObjectId(userID)}, (err, resources) => {
        if (err)
          console.log(err);
       else
          res.json(resources);
        });
      });




//////The next three routes retrieve the 3 priority Lists(refactor this later, condense the code) 3.4.19
//router.route('/mydb/findHighPriority').get((req, res)=> {
  // HighPriorityResource.find((err, resources) =>{
  //  if (err)
  //      console.log(err);
  //  else
  //      res.json(resources);

  //    });
// });

//router.route('/mydb/findMediumPriority').get((req, res)=> {

  //connection.collection("MediumPriorityList").find({$or:[
  //  {RedditTitle:{$exists:true}},
  //  {title:{$exists:true}}
  //]},(err, resources) =>{
  //  if (err)
    //    console.log(err);
  //  else
    //    res.json(resources);

  //    });
//});

//router.route('/mydb/findLowPriority').get((req, res)=> {


  // connection.collection("LowPriorityList").find({$or:[
    // {RedditTitle:{$exists:true}},
    // {title:{$exists:true}}
  // ]}, (err, resources) =>{
    // if (err)
    //     console.log(err);
    // else
      //   res.json(resources);

      // });
 //});


app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
