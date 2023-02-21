# Multi Env File Loader

### Installing

```bash
npm install multi-env-load
yarn add multi-env-load
```

### Usage

```js
require("multi-env-load")({
  paths: [".env", ".env.private", ".env.my"],
  overwrite: false,
});
```

### Options

```js
{
  paths:[<ENV_FILES>]
  overwrite: BOOLEAN
}

```
