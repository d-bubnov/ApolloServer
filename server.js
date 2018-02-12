const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const physicalPersons = [
    {
        id: "322845fc-0146-4e3b-80f9-3aafa5de584d",
        firstName: 'Denis',
        lastName: 'Bubnov',
        patronymic: 'A.',
        phoneNumber: '+79044436668',
        rating: '5'
    },
    {
        id: '270ca67f-0151-4927-b9c4-cdc754ef5bf8',
        firstName: 'Alexey',
        lastName: 'Ivanov',
        patronymic: 'P.',
        phoneNumber: '',
        rating: '-1'
    },
];

// The GraphQL schema in string form
const typeDefs = `
    type PhysicalPerson {
        id: ID! # "!" - it denotes a required field
        firstName: String
        lastName: String
        patronymic: String
        phoneNumber: String
        rating: Float
    }
    
    type Query {
        physicalPersons: [PhysicalPerson]
    }
`;

// The resolvers
const resolvers = {
        Query: { physicalPersons: () => physicalPersons },
    };

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});