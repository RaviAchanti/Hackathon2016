/**
 * Created by rachanti on 6/20/2015.
 */
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var port = process.env.PORT || 3000;
//var user = require('./models/userModel');
//require('./routes/routes')(app);

var router = express.Router();

//router.route('/user')
//      .post(function(req,res){
//        var user1 = new user(req.body);
//        user1.save();
//        console.log(user1);
//        res.send(user1);
//    })
//      .get(function(req,res){
//        var query = {};
//        if (req.query.name){
//            query.name = req.query.name;
//        }
//       user.find(function(err,users){
//           if(err)
//           res.status(500).send(err);
//           else
//           res.json(users);
//       })
//       // var responsejson ={hell0:"This is my api"};
//       // res.json(responsejson);
//    });

router.route('/users/:Id')
.get(function(req,res) {

        var u = {"name" : "Ravi","Id": 10171};
        res.json(u);

    });

app.use('/api',router);
app.get('/',function(req,res){
    res.send('hackathon');
});

app.listen(port,function(){
    console.log('Hack on the port',port);
});
app.on('error', function (err) {
    console.log('dir error', err);
});




