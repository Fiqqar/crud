// import express from 'express';
// import { showusers } from '../controllers/user.controller';

// const router = express.router();
// router.get('/users', showusers);

module.exports = app => {
    const usercontroller = require('../controllers/user.controller.js');
    var router = require("express").Router();
    router.get('/users', usercontroller.findAll);
    router.get('/users:id', usercontroller.findone);
    router.put('/users:id', usercontroller.update);
    router.delete('/users:id', usercontroller.deleteone);
    router.delete('/users', usercontroller.deleteall);
    router.post('/users', usercontroller.create);
    app.use("/api/v1", router);
};