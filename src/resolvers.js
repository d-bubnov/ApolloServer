/*
 * The resolvers
*/

import fakeData from './data/fakeData'

const resolvers = {
    Query: {
        physicalPersons: () => fakeData.physicalPersons,
        physicalPerson: (root, { id }) => {
            return fakeData.physicalPersons.find(pp => pp.id === id);
        },
        debts: () => fakeData.debts
    }
};

export default resolvers;