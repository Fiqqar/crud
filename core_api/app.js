const express = require('express');
const cors = require('cors');
const app = express();
require("./app/routes/user.routes") (app);

var corsoptions = {origin: 'http://localhost:8080'};
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors(corsoptions));
const PORT = process.env.PORT || 8080;

const db = require("./app/models");
db.sequelize2.sync({
    force: true,
}).then(() => {
    console.log("sync successful");
}).catch((err) => {
    console.log(err.message);
})
app.get('/',(req, res) => {
    res.json({
        message: "Welcome to my website..."
    });
});
require("./app/routes/user.routes.js")(app);
app.listen(PORT, function() {
    console.log(`listening on port:${PORT}`); //
})
// app.get('/user',(req, res) => {
//     const user = {
//         "name" : "example",
//         "id" : 1740,
//         "email" : "example@example.com"
//     };
//     res.send(user);
// });




