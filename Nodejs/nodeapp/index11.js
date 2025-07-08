import dotenv from 'dotenv';
//env function
dotenv.config()
//encodeURIComponent is used to encode the string so that it can be used in a URL
//process.env is used to access the environment variables
const dbuser = encodeURIComponent(process.env.DBUSER);               
const dbpass = encodeURIComponent(process.env.DBPASS);
console.log( dbuser, dbpass );

