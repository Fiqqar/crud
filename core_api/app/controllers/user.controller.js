import {users} from '../models/user.model.js';

// export const showusers = (req, res)=> {
//     users((err, results)=> {
//         if (err) {
//             res.send(err);
//         } else {
//             res.json(results);
//         }
//     });
// }

const db = require('../models');
const user = db.user;
const op = db.sequelize.op;

exports.findall = (req, res)=> {

}

exports.findone = (req, res)=> {
    
}

exports.create = (req, res)=> {
    if (!req.body.user) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }
    const user = {
    user : req.body.user, 
    password : req.body.password
    };
    user.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message : "database error when inserting"
        })
    })
}

exports.update = (req, res)=> {
    
}

exports.deleteone = (req, res)=> {
    
}

exports.deleteall = (req, res)=> {
    
}

exports.findallusers = (req, res)=> {
    
}