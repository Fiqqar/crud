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

exports.findAll = (req, res)=> {
    user.findAll().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message : "database error when retrieving users"
    });
});
};

exports.findone = (req, res)=> {
    const id = req.params.id;
    user.findByPk(id).then(data => {
        if(data) {
            res.send(data);
        }else {
            res.status(404).send({
                message : "user not found"
            });
        }
    });
};

exports.create = (req, res)=> {
    // error handling when client doesnt fill user form
    if (!req.body.user) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }

    // custom data
    const user = {
    user : req.body.user, 
    password : req.body.password
    };
    user.create(user).then(data => {
        res.send(data);
    }).catch(err => { // error handling when database cant be access
        res.status(500).send({
            message : "database error when inserting"
        });
    });
}

exports.update = (req, res)=> {
    const id = req.params.id;
    user.update(req.body, {
        where : {id:id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message : "password updated"
            });
        }
        else {
            res.send ({
                message : "cannot update user, missing password or user not found"
            });
        }
    })
    .catch (err => {
        res.status(500).send({
            message : "database error when updating password"
        });
    })
}

exports.deleteone = (req, res)=> {
    const id = req.params.id;
    user.destroy({
        where : {id:id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message : "user deleted"
            });
        }
        else {
            res.send ({
                message : "user to be deleted not found"
            });
        }
    })
    .catch (err => {
        res.status(500).send({
            message : "database error when deleting user"
        });
    })
}

exports.deleteall = (req, res)=> {
    
}