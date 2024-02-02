import db from '../config/db.config.js';
import { sequelize, sequelize2 } from './index.js';

// get all user
export const users = (result)=> {
    db.query("SELECT * FROM user", (err, results)=>{
        if (err) {
            console.log(err);
        } else {
            result(null, results);
        }
    });
}
module.exports = (sequelize, sequelize2) => {
    const user = sequelize.define('user', {
    user: {type: sequelize2.STRING},
    password: {type: sequelize2.STRING}
    });
    return user;
};