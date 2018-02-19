import Sequelize from 'sequelize';

const PhysicalPersonDefinition =
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
    };

export default PhysicalPersonDefinition;