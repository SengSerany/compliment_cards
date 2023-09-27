const asyncHandler = require('express-async-handler');

const goHome = asyncHandler(async (req, res) => {
  res.status(200).json({ entre_point: 'Homepage' });
});

module.exports = {
  goHome,
};
