import {users} from '../models/user.model.js';

export const showusers = (req, res)=> {
    users((err, results)=> {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}