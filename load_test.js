const autocannon = require('autocannon');

const instance = autocannon({
  url: 'http://localhost:3000',
  connections: 100,
  duration: 10
}, console.log);

autocannon.track(instance, {renderProgressBar: false});
