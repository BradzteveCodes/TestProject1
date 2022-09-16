var express = require('express');
var router = express.Router();
const app = express();
var con = require('../database.js')
var bodyParser = require('body-parser');
const multer = require('multer')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/gallery', function (req, res, next) {
  res.render('gallery', { title: 'Express Error' });
});
router.get('/funny', function (req, res, next) {
  res.render('funny', { title: 'Express Error' });
});
router.get('/admin-kit-index', function (req, res, next) {
  res.render('admin-kit-index', { title: 'Express Error' });
});


router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', { title: 'Express Error' });
});

router.get('/side-bar-collapse', function (req, res, next) {
  res.render('side-bar-collapse', { title: 'Express Error' });
});

router.get('/demo', function (req, res, next) {
  res.render('demo', { title: 'Express Error' });
});





router.get('/database', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    res.send("Database Connection Establish");
  });
});

router.get('/insert', function (req, res) {
  var sql = "INSERT INTO exampledata (id, lname,mobile,address) VALUES ('23','Morillo','09451327055','Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send("1 record inserted");
  });
});

router.get('/table-data', function (req, res, next) {
  var query = "select * from exampledata";
  con.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      res.render('table-data', { title: 'This a Title Data', action: 'list', sampleData: data });

    }
  });
});

router.get('/get-form-data', function (req, res, next) {
  res.render('form', { title: 'Form Data' });
  router.post('/login', function (req, res,) {

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    console.log(password);
    res.render('form', { title: email + " " + password + " Successfully Submitted!" });
  });
});





//upload file to server
var name;
router.get('/file-upload-form', function (req, res, next) {
res.render('file-upload-form',{title:'Upload File to Server',fileImage:name});
});
router.post('/uploadjavatpoint',function(req,res){  
  var storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './public/images');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname); 
      name= file.originalname;
    } 
  }); 
  var upload = multer({ storage : storage}).single('myfile');  
    upload(req,res,function(err) {  
        if(err) {  
          res.render('file-upload-form',{title:'Upload Error'});
        }else{
          res.render('file-upload-form',{title:'Successfully Uploaded to Server',fileImage:name});
      } 
    }); 
});  


module.exports = router;
