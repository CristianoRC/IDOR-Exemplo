const getInvestimens = (userId) => {
    const investments = [{ userId: 1, value: 5000 }, { userId: 2, value: -500 }];

    return investments.find(investiment => investiment.userId === Number(userId));
}

module.exports = { getInvestimens }