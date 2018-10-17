const getName = require('./lib/getName');

module.exports = () => {
  console.log(`hello ${getName.getName()}, here is my awesome module`);
};
