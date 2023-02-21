const cors = require('cors');

const Cors = (app) => app.use(cors());

module.exports = Cors;
