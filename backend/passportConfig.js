  import passport from 'passport';
  import locStrat from 'passport-local';
	const localStrategy = locStrat.Strategy;
	import mongoose from 'mongoose';
  import UserAccount from './models/UserAccount.js';


	var User = mongoose.model('UserAccount'); //need to interact with MongoDB


	passport.use( //Configure authentication

		new localStrategy({ usernameField: 'email' },
			(username, password, done) => { //when we call for authentication from passport, this arrow function will be called.
        console.log("Check the user");
        console.log(username);
        console.log(password);

			   User.findOne( {email: username},//Inside, verify valid email and password
				(err, user) => {
					if (err){
            console.log("Big Error!")
						return done(err);}
						//unknown user, email
					else if (!user){
            console.log("No user!");
            console.log(user);
						return done(null, false, { message: 'Email is not registered'});}

					//wrong password
					else if (!user.verifyPassword(password)){ //If user email exists but the password given does not match what is in the records.
            console.log("Cannot verify");
            console.log(user);
            return done(null, false, {message: 'Wrong password.'});}

					//authentication succeeded
					else
            console.log("Finally")
						return done(null, user);

			})


		})
  );

  export default passport;
