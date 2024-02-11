const express = require('express');
const cors = require('cors');
const app = express();
require("./app/routes/user.routes") (app);

var corsoptions = {origin: 'http://localhost:8080'};
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors(corsoptions));
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log(`listening on port:${PORT}`); //
})
app.get('/user',(req, res) => {
    const user = {
        "name" : "example",
        "id" : 1740,
        "email" : "example@example.com"
    };
    res.send(user);
});

app.get('/',(req, res) => {
    res.json({
        message: "Welcome to my website..."
    });
});

const db = require("./app/models");
db.sequelize.sync().then(() => {
    console.log("sync successful");
}).catch((err) => {
    console.log(err.message);
})