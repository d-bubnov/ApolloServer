import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

// import models
import { PhysicalPersonDefinition, DebtDefinition } from '../models/Models';

const operators = Sequelize.Op; // use Symbol based operators for better security
const dataBase = new Sequelize(
    'debtors',
    null,
    null,
    {
        dialect: 'sqlite',
        storage: './debtors.sqlite',
        operatorsAliases: operators
    }
);

// define models
const PhysicalPersonModel = dataBase.define('physicalPerson', PhysicalPersonDefinition);
const DebtModel = dataBase.define('debt', DebtDefinition);

// set relationship
DebtModel.hasMany(PhysicalPersonModel);

// TODO: uncomment next code when database is not exist or empty
// casual.seed(123);
//
// dataBase.sync({ force: true }).then(()=> {
//     _.times(10, ()=> {
//         return PhysicalPersonModel.create({
//             id: casual.uuid,
//             firstName: casual.first_name,
//             lastName: casual.last_name,
//             patronymic: '',
//             phoneNumber: casual.phone,
//             rating: null
//         }).then(physicalPerson => {
//             return DebtModel.create({
//                 id: casual.uuid,
//                 description: `A debt by ${physicalPerson.firstName} ${physicalPerson.lastName}`,
//                 dateStart: casual.unix_time,
//                 dateEnd: casual.unix_time,
//                 dueDate: casual.unix_time,
//                 physicalPersonId: physicalPerson.Id
//             });
//         });
//     });
// });

const PhysicalPersons = dataBase.models.physicalPerson;
const Debts = dataBase.models.debt;

export { PhysicalPersons, Debts };