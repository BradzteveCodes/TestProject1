var express = require('express');
var router = express.Router();
const app=express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/page1', function(req, res, next) {
  res.render('page1', { title: 'Express Error' });
});

// const path = require('path');
// app.use('/', router);
// router.get('/page1', function (req, res) {
//     res.sendFile(path.join(__dirname + '/page1.ejs'));
//     //__dirname : It will resolve to your project folder.
//   });\

  router.get('/page1', function (req, res) {
    res.sendFile(path.join(__dirname + '/page1.ejs'));
  });
  

module.exports = router;
