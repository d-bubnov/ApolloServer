import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {graphiqlExpress, graphqlExpress} from "apollo-server-express";
import colors from 'colors'

import schema from "./src/schemas/schema";

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
    console.log(colors.green('Go to http://localhost:3000/graphiql to run queries!'));
});