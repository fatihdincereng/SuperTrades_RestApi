const paths = [
    'env/.env',
    'env/.env.db',
  ];
module.exports = require('multi-env-load')({
    paths,
});
  