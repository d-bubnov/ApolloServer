import { PhysicalPersons, Debts } from '../data/connector'

const resolvers = {
    Query: {
        physicalPersons: () => PhysicalPersons.all(),
        physicalPerson: (root, { id }) => {
            return PhysicalPersons
                .findOne({ where: { id: id } })
                .then((physicalPerson) => { return physicalPerson; });
        },
        debts: () => Debts.all(),
        debt: (root, { id }) => {
            return Debts
                .findOne({where: { id: id }})
                .then((debt) => { return debt; });
        }
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