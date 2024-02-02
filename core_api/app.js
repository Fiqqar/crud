const express = require('express');
const app = express();
app.use(express.json());
const db = require('./app/models');
db.sequelize.sync();
const PORT = process.env.PORT || 3000;
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