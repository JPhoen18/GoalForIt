import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import jwt from 'jsonwebtoken'; //This is the most recent error

//import Goalschema from './Goals';
import GoalsSchema from './Goals.js';
import bcrypt from 'bcryptjs';
const JWT_SECRET = "SECRET393232023203290"  //Should be stored in a config.json
const JWT_EXP = "2h"  //Should be stored in a config.json

//import Goals from './Goals'

//var Goals = require('./../models/goals');
let UserAccount = new Schema({

  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  userid: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  goals: {
    type: [GoalsSchema.schema]
    //type: Schema.Types.ObjectID, ref: 'GoalsSchema'

  },
  admin: {
    type: Boolean
  },

   saltSecret: {
       type: String
   }
});

    UserAccount.path('email').validate((val) => {
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(val);
    }, 'Invalid e-mail.');

    UserAccount.pre('save', function(next){
       console.log("I am about to encrypt");
        bcrypt.genSalt(10, (err,salt) =>{
            bcrypt.hash(this.password, salt, (err, hash) =>{
                this.password = hash;
                this.saltSecret = salt;
                next();
          })

        })
          //next();
      });
      console.log(Schema.methods)
    UserAccount.methods.verifyPassword = function (password) {
        console.log("Password Compare");
        console.log(password);
        console.log(this.password);
        console.log(bcrypt.compareSync(password, this.password));
        return bcrypt.compareSync(password, this.password);
        //Compare plaing password with encrypted password
    };

    UserAccount.methods.generateJwt = function(){
      //console.log(this._id);
      //console.log(jwt);
  return jwt.sign({ _id: this._id},
         JWT_SECRET,
        {expiresIn: JWT_EXP}
    );
};

//const jwt = require('jsonwebtoken'); //This is the most recent error
export default mongoose.model('UserAccount', UserAccount, 'UserAccount');
