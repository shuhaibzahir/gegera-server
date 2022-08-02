const express = require('express');
const bodyParser = require('body-parser');
const {dbConnect} = require("./src/config/db");
const CONSTANT = require("./src/config/constants");
const auth = require('./src/routers/auth');
const userRoute = require('./src/routers/users/routes')
const proUserRoute = require('./src/routers/proUsers')
const app = express();
const port = 4000;

app.use(bodyParser.json());
dbConnect(CONSTANT.dbUrl);


/* ---------------------------- non authenticated --------------------------- */

app.use('/api/user',auth)


/* ------------------------------ autheticated ------------------------------ */
// users
app.use('/api/user/',userRoute)


// pro users

app.use('/api/user/',proUserRoute)


//admin





app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});