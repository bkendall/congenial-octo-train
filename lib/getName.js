const crypto = require('crypto');

module.exports = {
  getName: () => {
    const bytes = crypto.randomBytes(8);
    return bytes.toString('hex');
  }
};
