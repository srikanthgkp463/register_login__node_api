const userModel = require('../models/users');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
module.exports = {
    registeruser: function(req, res, next) {
        userModel.create({  username: req.body.username,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            email: req.body.email, 
                            password: req.body.password 
                            }, 
                            function (err, result) {
                                if (err){
                                    console.log(err);
                                    next(err);
                                }
                                else{
                                    res.json({  statusCode : 200,
                                                status: "success", 
                                                message: "A verification mail has been sent to your registered mail successfully" 
                                    });
                                }
                                
                            });
    },
login: function(req, res, next) {
    userModel.findOne({username:req.body.username}, function(err, userInfo){
                if (err) {
                    next(err);
                } else {
                    if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                        const client_token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                        res.json({  token:client_token,
                                    status:"success", 
                                    statusCode : 200,
                                    user:{ id: userInfo.id,
                                           username: userInfo.username,
                                           email:userInfo.email,
                                           firstname:userInfo.firstname,
                                           lastname:userInfo.lastname
                                        }
                                });
                    }else{
                        res.json({status:"error", message: "Please provide valid email or password."});
                    }
                }
            });
 }
}