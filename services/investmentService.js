const getInvestimens = (userId) => {

    const investments = [
        { userId: '392ce4f3-4cf7-4c38-af97-d7a319cfb350', value: 5000 },
        { userId: 'ed364d2d-4151-46aa-80e2-d22288d2c7a0', value: -500 }
    ];
    return investments.find(investment => investment.userId === userId);

}



module.exports = { getInvestimens }