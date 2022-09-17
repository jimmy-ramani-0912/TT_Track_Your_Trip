npm init -y => create package.json

yarn add express /  npm install express => adding express package

npm add nodemon => adding nodemon packages

---------------------------------------------------------------------------------------------

Adding Mongodb 

---------------------------------------------------------------------------------------------

npm add mongoose => adding mongoose package

npm install dotenv => adding dotenv package

---------------------------------------------------------------------------------------------

for connect to application add code as mention in index.js file ...

---------------------------------------------------------------------------------------------

adding routes for api like GET , POST , PUT etc with providing link ...
Here I added auth , hotels ,rooms and users in routes

Adding routes path in index.js file which is like app.use("/api/auth" , authRoutes)

---------------------------------------------------------------------------------------------

Make Models of this all routes whih is I mentioned in models Package 

---------------------------------------------------------------------------------------------
npm install body-parser => adding body-parser package

and add 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

so we can post the data suuccessfully

---------------------------------------------------------------------------------------------
Now Post the data in Hotel Database using ThunderClient or Postman

---------------------------------------------------------------------------------------------

error show using this 
 
  const failed = true;
  if (failed) {return next(createerror(401,"error"));}

---------------------------------------------------------------------------------------------

Now I am ready with Hotels 

---------------------------------------------------------------------------------------------

Now start to make Users Registration and log in and all ..as maded hotels APIs

---------------------------------------------------------------------------------------------

npm add bcrypt => adding bcrypt package
// this us use for encoding passwords

---------------------------------------------------------------------------------------------

npm jsonwebtoken => adding jsonwebtoken package
//by this giving particular token and use specif user data like some part only admin added etc..
//Means uniq identity

---------------------------------------------------------------------------------------------

openssl rand -base64 64 => run in cmd for generate webtoken

---------------------------------------------------------------------------------------------

npm add cookie-parser

---------------------------------------------------------------------------------------------