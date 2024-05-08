
const usermodel = require('../models/userModel');
const Data_validators = require('../validators/data_validaton');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }
});


class User {

    index(req, res){
        res.render('index')
    }
    login(req,res){
      console.log(req.body);
      const userData = req.body;
      usermodel.fetch_user_data(userData)
      .then(results => {
        if (results.length != 0) {
          console.log(results);
          
            const user = results[0];
            req.session.user = user;
            res.json({ status: 'success', message: 'Login successful!', user });

        } else {
            res.json({status: 'failed', message:'Incorrect username or password!' });
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    });

    }

    setSessionUser(req,res){
      if (req.session.user) {
        res.json({ user: req.session.user });
      } else {
        res.status(404).json({ message: 'User data not found in session' });
      }
    }



}

module.exports = new User();
