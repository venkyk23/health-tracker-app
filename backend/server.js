const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [];

// REGISTER
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: "Registered Successfully ✅" });
});

// LOGIN
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => 
        u.username === username && u.password === password
    );

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// DASHBOARD DATA
app.get('/dashboard', (req, res) => {
    res.json({
        steps: 6500,
        calories: 320,
        sleep: 7,
        healthScore: 85
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on network");
});