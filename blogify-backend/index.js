// Modules
import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, Node.js server!');
});

app.listen(4444, (error) => {
    if (error) return console.error(error);

    console.log('Server is working');
});