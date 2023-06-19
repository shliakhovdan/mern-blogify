import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, Node.js server!');
});

app.listen(4444, (error) => {
    if (error) console.log(error);

    console.log('Server is active!');
});