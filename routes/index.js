const main=require('./main');
const user=require('./user');
const portfolio=require('./portfolio');
const share=require('./share');
const transaction=require('./transaction')

const routes = (app) => {
  app.use('/', main);
  app.use('/users', user);
  app.use('/portfolios', portfolio);
  app.use('/shares', share);
  app.use('/transactions', transaction);
};




module.exports = routes;


