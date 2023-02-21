require('multi-env-load')({
  paths: ['.env', '.env.private'],
  overwrite: false,
});

/* eslint-disable no-console */
console.log(process.env.INIT_CWD);
console.log(process.env.PUBLIC_ENV);
console.log(process.env.PRIVATE_ENV);
console.log(process.env.PRIVATE_ENV_2);
/* eslint-enable no-console */
