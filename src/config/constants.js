

require("dotenv").config()
const {database_url,jwt_secret} = process.env;
module.exports ={
    dbUrl: database_url || "",
    jwtSecret: jwt_secret || ""
}