const connection = require('../config/database')
// router.Method("route", handler);
const getHomepage = (req, res) => {
  let users = [];

  connection.query(
    'SELECT * FROM Users u',
    function(err, results, fields) {
      users = results;
      console.log(">>>results home page= ",results);
      console.log(">>check users: ",users);
      res.send(JSON.stringify(users));
    }
  );
  
};
const getabc = (req, res) => {
  res.send("Hello");
};

module.exports = {
  getHomepage,
  getabc,
};
