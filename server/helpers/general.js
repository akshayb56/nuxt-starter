const asyncWrap = middleware =>
  async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      console.log(JSON.stringify(err));
      next(err);
    }
  };

const toJSON = data => JSON.parse(JSON.stringify(data));

const throw404 = function(res, message = 'Not found') {
  return res.status(404).json({
    statusCode: 404,
    status: 'error',
    message
  })
}

const throw500 = function(res, message = 'Not found') {
  return res.status(500).json({
    statusCode: 500,
    status: 'error',
    message
  })
}

module.exports.asyncWrap = asyncWrap;
module.exports.toJSON = toJSON;
module.exports.throw404 = throw404;
module.exports.throw500 = throw500;