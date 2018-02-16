/*
 * The resolvers
*/

import fakeData from './data/fakeData'
import { PhysicalPersons, Debts } from './data/connectors'

const resolvers = {
    Query: {
        physicalPersons: () => PhysicalPersons.all(),//fakeData.physicalPersons,
        physicalPerson: (root, { id }) => {
            return fakeData.physicalPersons.find(pp => pp.id === id);
        },
        debts: () => Debts.all() //fakeData.debts
    },
    Mutation: {
        createDebt: (root, { id, description, dateStart, dateEnd, dueDate, physicalPersonId }) => {
            return PhysicalPersons.findOne({ where: { id: physicalPersonId } }).then( (physicalPerson) => {
                console.log('physicalPerson', physicalPerson);
                return Debts.create({ id, description, dateStart, dateEnd, dueDate });
            });
        }
    }
};

export default resolvers;