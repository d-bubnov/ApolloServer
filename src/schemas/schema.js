/**
 * Put together a schema
 * */

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/resolvers'

// The GraphQL schema in string form
const typeDefs = `
    type PhysicalPerson {
        id: ID!
        firstName: String
        lastName: String
        patronymic: String
        phoneNumber: String
        rating: Float
    }
    
    type Debt {
        id: ID! 
        description: String
        dateStart: String
        dateEnd: String
        dueDate: String
        hasPartialRedemption: Boolean
        physicalPerson: PhysicalPerson!
    }
    
    type Query {
        physicalPersons: [PhysicalPerson]
        physicalPerson(id: ID!): PhysicalPerson
        debts: [Debt]
        debt(id: ID!): Debt
    }
    
    type Mutation {
        addPhysicalPerson(firstName: String!, lastName: String!, patronymic: String, phoneNumber: String!) : PhysicalPerson
        createDebt(id: ID!, description: String!, dateStart: String, dateEnd: String, dueDate: String, physicalPersonId: ID!) : Debt
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;