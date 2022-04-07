import jwt from 'jsonwebtoken';

const JWT_SECRET = "SECRET393232023203290"  //Should be stored in a config.json
//const JWT_EXP = "2h" //Should be stored in a config.json


//jwt should be in the request header
const vjt = {
  verifyJwtToken(req, res, next){
  var token;
  console.log("Verify JWT");
  console.log(req.headers);
  //console.log("Auth Check");
  //var tempheader = String(req.headers);
  //onsole.log(tempheader[1]);
  //console.log(typeof(tempheader));
  //authorization
    if ('authorization' in req.headers)//if ('authorization' in req.headers) //if we have this property, then go ahead with jwt authentiation
        token = req.headers['authorization'].split(' ')[1];
        console.log("We did it!")
        console.log(req.headers)
    if(!token)
        return res.status(403).send({ auth: false, message: "No token provided."});
    else{
      jwt.verify(token, JWT_SECRET,
      (err, decoded) => {
        if(err)
            console.log({ auth: false, message: 'Token authentication failed' })
            //return res.status(500).send({ auth: false, message: 'Token authentication failed' });
        else  {
          req._id = decoded._id;
          console.log("Here is my info!");
          console.log(req._id);
          //return req._id;
          //next();
        }
      });
    }
    return req;
  }
}

export default vjt;
