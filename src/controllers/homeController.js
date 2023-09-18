// router.Method("route", handler);
const getHomepage = (req, res) => {
  res.send("Hello");
};
const getabc = (req, res) => {
  res.send("Hello");
};

module.exports = {
  getHomepage,
  getabc,
};
