// THIS IS OUR WEB SERVER!!

// With the help from both NODE and it's framework EXPRESS we can create 
// clean and readable code instead of writing more lines of code

// Example of Node without Express: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from '../backend/routes/datingRoutes'; // importing the routes from file datingRoutes from folder routes

const app = express();
const PORT = 3001;

// Mongo Connection - we are now connected to MongoDB and can use it however we like
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Body-Parser Setup 
// used to transpile the request into something that mongo/database can understand
app.use(bodyparser.urlencoded( { extended: true } ) ); // allows use to pass the request and encode it properly
app.use(bodyparser.json()); 

// CORS Setup
app.use( cors() ); // cors stands for Cross Origin Resource Sharing 
// allows restricted resources on a web page to be requested from another 
// domain outside the domain from which the first resource was served

routes(app);

// EXPRESS ROUTING ---------------------------------------->

// we created the route '/'  with a callback function to run
app.get('/', ( req, res ) => // when we have a REQUEST we want a RESPONSE --> ALWAYS DO IT THIS WAY
    res.send(`This is my dating app is on port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Our dating server is running on ${PORT}`)
)

