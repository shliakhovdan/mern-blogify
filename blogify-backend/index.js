import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello, Node.js server!');
});

app.post('/auth/login', (request, response) => {
    console.log(request.body);
    response.json({
        success: true,
    });
});

app.listen(4444, (error) => {
    if (error) console.log(error);

    console.log('Server is active!');
});