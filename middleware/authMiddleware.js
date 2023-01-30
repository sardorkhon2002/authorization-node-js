const { decode } = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS')
    try {
      const tokem = req.headers.authorization.split(' '[1]);
      if (!token) {
        return res.status(403).json({ message: 'User is not registered' });
      }
      const decodeData = jwt.verify(token, 'SecretKey');
      req.user = decodeData;
      next();
    } catch (err) {
      console.log(err);
      return res.status(403).json({ message: 'User is not registered' });
    }
};
