const { log } = require('./log');

async function example() {
  await log('backend', 'info', 'handler', 'User requested data');
}
