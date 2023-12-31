const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('listening on port'); //
})
app.get('/user',(req, res) => {
    const user = {
        "name" : "user@example"
    };
    res.send(user);
});

