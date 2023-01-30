module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS')
      try {
        const tokem = req.headers.authorization.split(' '[1]);
        if (!token) {
          return res.status(403).json({ message: 'User is not registered' });
        }
        const { roles: userRoles } = jwt.verify(token, secret);
        let hasRole = false;
        userRoles.forEach((role) => {
          if (roles.includes(role)) {
            hasRole = true;
          }
        });
        if (!hasRole) {
          return res
            .status(403)
            .json({ message: 'User do not have permission' });
        }
        next();
      } catch (err) {
        console.log(err);
        return res.status(403).json({ message: 'User is not registered' });
      }
  };
};
