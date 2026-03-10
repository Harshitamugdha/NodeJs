var exp = require("express");
var obj = exp();
obj.use(exp.urlencoded({ extended: true }));

// Show form
obj.get('/open', (req, res) => {
    res.sendFile(__dirname + '/task4.html');
});

// Middleware
var auth = (req, res, next) => {
    if (req.body.f1 === 'admin') {
        console.log("Authenticated");
        next();
    } else {
        console.log("Wrong user");
        res.send("Access Denied");
    }
};


obj.post('/login', auth, (req, res) => {
    res.redirect('/task2.html');
});


obj.get('/task2.html', (req, res) => {
    res.sendFile(__dirname + '/task2.html');
});

obj.listen(3000, () => {
    console.log("Server running on port 3000");
});