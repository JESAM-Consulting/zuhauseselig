require( 'dotenv' ).config()
require("./db/connection")

const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 3030

// define all route imports here
const userForm = require( "./routes/userMaster" )

// define all routes here
app.use( cors() )
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use( "/new-project/api/v1", userForm )


app.listen(port, () => console.log(`app is listning to port: ${port}!`))