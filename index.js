const getName = require('./lib/getName');

module.exports = () => {
  const name = getName.getName();
  console.log(`hello ${name}, here is my awesome module`);
  return name;
};
