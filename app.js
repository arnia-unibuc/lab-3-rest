const express = require('express');

const app = express();

app.use(express.json());

const db = {
    users: [],
    posts: [],
}

const createUsers = (amount = 10) => {
    for (let i = 0; i < amount; i++) {
        db.users.push({
            id: i,
            name: `User ${i}`,
            email: `test@test.com`,
        });
    }
}

app.get('/users', (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 0;
    const sliceStart = page * limit;

    const response = db.users.slice(sliceStart, sliceStart + limit);

    res.json(response);
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if(!name) {
        res.status(400).json({ error: 'Name is required' });
        return;
    }

    if(!email) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    if(!name && !email) {
        res.status(400).json({ error: 'Name and Email are required' });
        return;
    }

    if(db.users.find(user => user.email === email)) {
        res.status(400).json({ error: 'Email already exists' });
        return;
    }

    const user = {
        id: db.users.length,
        name,
        email,
    };

    db.users.push(user);

    res.send(user);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if(!name) {
        res.status(400).json({ error: 'Name is required' });
        return;
    }

    if(!email) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    if(!name && !email) {
        res.status(400).json({ error: 'Name and Email are required' });
        return;
    }

    if(!db.users[id]) {
        res.status(404).json({ error: 'User does not exist' });
        return;
    }

    const user = {
        id: parseInt(id, 10),
        name,
        email,
    };

    db.users[id] = user;

    res.send(user);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    if(!db.users[id]) {
        res.status(400).json({ error: 'User does not exist' });
        return;
    }

    db.users.splice(id, 1);

    res.send({ success: true });
});



module.exports = app;
