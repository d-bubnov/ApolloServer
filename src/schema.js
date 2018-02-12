/**
 * Put together a schema
 * */

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers'

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

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;