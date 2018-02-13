// Some fake data

const fakeData = [];

const physicalPersons = [
    {
        id: '322845fc-0146-4e3b-80f9-3aafa5de584d',
        firstName: 'Denis',
        lastName: 'Bubnov',
        patronymic: 'A.',
        phoneNumber: '+79044436668',
        rating: '5'
    },
    {
        id: '270ca67f-0151-4927-b9c4-cdc754ef5bf8',
        firstName: 'Alexey',
        lastName: 'Ivanov',
        patronymic: 'P.',
        phoneNumber: '',
        rating: '-1'
    },
];

const debts = [
    {
        id: '8583ff1f-fe4e-4dde-8f01-bd97651287ea',
        description: 'Test debt one',
        dateStart: '12.07.2017',
        dateEnd: '',
        dueDate: '12.09.2017',
        hasPartialRedemption: false,
        physicalPerson: null
    }
];

fakeData.physicalPersons = physicalPersons;
fakeData.debts = debts;

export default fakeData;