const setPath = async (req, res, next) => {
  const baseUrl = req.baseUrl;
  req.dir = `public/uploads/${baseUrl}`;
  next();
};

module.exports = setPath;
