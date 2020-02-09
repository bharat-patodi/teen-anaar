const express = require('express');
// This will serve as the middleware
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');
const app = express();

// Middleware
app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(4040, () => {
    console.log("now listening to port 4040 chatter");
})