const getInvestimens = (userId) => {
    const investments = [{ userId: 101, value: 5000 }, { userId: 103, value: -500 }, { userId: 100, value: 0 }];
    return investments.find(investment => investment.userId === Number(userId));
}

// const userCanAccessInvestment = (userId, targetId) => {
//     const permissions = [{ userId: 100, targets: [100, 103] }]

//     return permissions.find(x => x.userId == userId).targets.some(x => x === targetId);
// }

module.exports = { getInvestimens }