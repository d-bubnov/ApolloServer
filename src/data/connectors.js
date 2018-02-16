import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const dataBase = new Sequelize(
    'debtors',
    null,
    null,
    {
        dialect: 'sqlite',
        storage: './debtors.sqlite'
    }
);

const PhysicalPersonModel = dataBase.define(
    'physicalPerson',
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        patronymic: {
            type: Sequelize.STRING,
            allowNull: true
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.FLOAT,
            allowNull: true
        }
    }
);

const DebtModel = dataBase.define(
    'debt',
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        dateStart: {
            type: Sequelize.BIGINT
        },
        dateEnd: {
            type: Sequelize.BIGINT
        },
        dueDate: {
            type: Sequelize.BIGINT
        },
        hasPartialRedemption: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
);

DebtModel.hasMany(PhysicalPersonModel);

casual.seed(123);

dataBase.sync({ force: true }).then(()=> {
    _.times(10, ()=> {
        return PhysicalPersonModel.create({
            id: casual.uuid,
            firstName: casual.first_name,
            lastName: casual.last_name,
            patronymic: '',
            phoneNumber: casual.phone,
            rating: null
        }).then(physicalPerson => {
            return DebtModel.create({
                id: casual.uuid,
                description: `A debt by ${physicalPerson.firstName} ${physicalPerson.lastName}`,
                dateStart: casual.unix_time,
                dateEnd: casual.unix_time,
                dueDate: casual.unix_time,
                physicalPersonId: physicalPerson.Id
            });
        });
    });
});

const PhysicalPersons = dataBase.models.physicalPerson;
const Debts = dataBase.models.debt;

export { PhysicalPersons, Debts };