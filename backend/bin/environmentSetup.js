require('dotenv').config()

if(!process.env.MYSQL_URL){
  throw("Can't find environment variable MYSQL_URL")
}else{
  console.log("Mongo URL: "+ process.env.MYSQL_URL)
}

if(!process.env.MYSQL_PORT){
  throw("Can't find environment variable MYSQL_PORT")
}else{
  console.log("Mongo PORT: "+ process.env.MYSQL_PORT)
}


if(!process.env.REST_PORT){
  console.log("Can't find environment variable  REST_PORT, fallback to 40000")
}

if(!process.env.SOCKET_PORT){
  console.log("Can't find environment variable  REST_PORT, fallback to 40000")
}

module.exports = process.env