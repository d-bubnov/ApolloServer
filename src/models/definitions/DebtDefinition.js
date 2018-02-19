import Sequelize from 'sequelize';

const DebtDefinition =
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
    };

export default DebtDefinition;