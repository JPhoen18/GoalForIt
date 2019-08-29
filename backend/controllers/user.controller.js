//const mongoose = require('mongoose');
let mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

import UserAccount from '../models/UserAccount.js';
import HighPriorityList from '../models/HighPriorityList.js';
import MediumPriorityList from '../models/MediumPriorityList.js';
import LowPriorityList from '../models/LowPriorityList.js';
import HttpClient from '@angular/common/http';
let uri = 'http://localhost:4000'
//const ResourceService = require('../../src/app/resource.service.ts');

//import ResourceService from '../../src/app/resource.service.ts';


//const User = mongoose.model('UserAccount');
//const UserAccount = require('../models/UserAccount.js');
//import UserAccount from 'UserAccount'
console.log(typeof(UserAccount))
const highpriorlist = new HighPriorityList({
  Title:'',
  AuthorURL: '',
  Content: ''
})


console.log(highpriorlist);

const medpriorlist = new MediumPriorityList({
  Title:'',
  AuthorURL: '',
  Content: ''
})

const lowpriorlist = new LowPriorityList({
  Title:'',
  AuthorURL: '',
  Content: ''
})
//console.log(UserAccount.schema);
//console.log(typeof(UserAccount)); -- object


//var Schema = new mongoose.Schema;
//import UserAccount from 'UserAccount'
//const User = require('../models/UserAccount').schema;



//const UserAccount = mongoose.model('UserAccount') //need to interact with MongoDB
//console.log(typeof(UserAccount))
//console.log("User");
//console.log(UserAccount);


module.exports.register = (req, res, next) => {
    var user = new UserAccount()

    //console.log(user.schema);

    user.firstname = req.first;
    user.lastname = req.last;
    user.userid = req.user;
    user.password = req.pass;
    user.email = req.email;
    user.goals = user.goals;
    user.admin = false;
    user.saltSecret = '';


    try{
    user.save((err, doc) => { //Will not work if the object does not have all the fields of the UserAccount
      console.log("Here is the doc")
      console.log(doc);

        if (!err){//Finally there is no error, however there is an issue with res.send()
            console.log("Yah");
            return doc;  // Model.save only returns error and saved data there's no res parameter in it.
          }//return doc;
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
              //  return next(err);
              console.log("Check it right now")
              console.log(err);
        }

    });}

    catch(err){
      console.log("No encryption today!");
      console.log(err);
    }

}

//Smodule.exports.authenticate(var) => {
//  module.exports.authenticate = (req) => {
 module.exports.authenticate = (req, res, fn) =>{ //Called from server.js route
  var tokenizer;
    console.log("I am authenticating!")
    passport.authenticate('local', (err, user, info) => {
     //Param values above are passed from passportconfig.js,
     //received inside callback function
     //call authenticate executes arrow function in passportconfig.js
        if (err) {
          return res.status(400).json(err);
          console.log("Error!");
          console.log(err);}

        else if (user){ //value inside user
          //console.log("Once below: ")
          //var tokenizer = user.generateJwt();
          //console.log(tokenizer);
           tokenizer = {"token": user.generateJwt() };
        //  req.tokens = {"token": user.generateJwt() };
          console.log("Fix the tokens")
          console.log(tokenizer);

          //console.log(req.tokens)
          fn(tokenizer);


          //return tokenizer;
          //return req.tokens;
          //return res.status(200).json({"token": user.generateJwt() }); // 7/1/19 -- cannot read property status of undefined
        //  res.send(user.generateJwt());
      //    tokens = user.generateJwt();
        //  console.log("The tokens are here")
        //  console.log(tokens);
          //var profuser = user.generateJwt();
          //console.log(profuser);
          //res.token = tokenizer;
          //.generateJWT is defined in UserAccount
          //Perhap here is where I reroute to the home page
        }
          //unknown user, wrong password
        else{
          return res.status(404).json(info);}
    })(req,res);
  //next();
}

module.exports.userProfile = (req, res, refunc) =>{
  var userholder = '';
  console.log("Get me a profile");
   UserAccount.findOne({ _id : req._id },
     (err, user) => {
       if (!user)
            console.log({ status: false, message: 'User record not found. '});
           //return res.status(404).json({ status: false, message: 'User record not found. '});
           //return res.json({status: false, message: 'User record not found. '})
          // return { status: false, message: 'User record not found. '};
       else
            //console.log({ status: true, user : _.pick(user,['firstname','lastname','email']) });
            userholder = { status: true, user : _.pick(user,['_id','firstname','lastname','userid', 'email', 'admin']) };
            req.userholder = userholder;
            console.log("Where is the User Holder?");
            console.log(req.userholder);
            refunc(req.userholder);
          //  console.log(req.userholder);
            //This works for the right user//
           //return res.status(200).json({ status: true, user : _.pick(user,['firstname','lastname','email']) });
        //   return { status: true, user : _.pick(user,['firstname','lastname','email']) };
            //userholder = _.pick(user,['firstname','lastname','email']);
      //return userholder;
    });
    return req.userholder;
}
    //
