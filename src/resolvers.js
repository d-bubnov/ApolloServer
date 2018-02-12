/*
 * The resolvers
*/

import physicalPersons from './data/fakeData'

const resolvers = {
    Query: { physicalPersons: () => physicalPersons },
};

export default resolvers;