const logs = (req, _res, next) => {
  console.log('req.method :', req.method);
  console.log('req.params :', req.params);
  console.log('req.path :', req.path);
  console.log('req.query :', req.method);
  console.log('req.headers :', req.headers);
  console.log('req.body :', req.body);
  next();
};

module.exports = logs;
