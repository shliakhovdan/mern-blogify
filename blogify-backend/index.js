import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello, Node.js server!');
});

app.post('/auth/login', (request, response) => {
    const token = jwt.sign({
        email: request.body.email,
        fullName: 'Daniil Shliakhov'
    }, 'secretwebtoken');
    response.json({
        success: true,
        token,
    });
});

app.listen(4444, (error) => {
    if (error) console.log(error);

    console.log('Server is active!');
});