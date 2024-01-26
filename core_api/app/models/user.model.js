import db from '../config/db.config.js';

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