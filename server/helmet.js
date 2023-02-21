const helmet = require('helmet');

const Helmet = (app) => app.use(helmet());

module.exports = Helmet;
