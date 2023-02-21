const portfolio=require('./portfolio');
const user=require('./user');
const transaction=require('./transaction');
const share=require('./share');
const portfolioshares=require('./portfolioShares');

const Models = {
  portfolio,
  user,
  share,
  transaction,
  portfolioshares,
};

global.models = Models;

console.log('Models: Connected');

module.exports = Models;

