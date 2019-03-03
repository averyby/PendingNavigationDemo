const fs = require('fs');

function grab(flag) {
  const index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index + 1];
}

const appConfig = {};

appConfig.type = grab('--type') || 'SSR';

fs.writeFileSync(
  'appConfig.json',
  JSON.stringify(appConfig, null ,4)
);