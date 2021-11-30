console.log('start');
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log('home route request')
    res.send('Bunicio && Prince === Love');
});

app.get('/users', (req,res) => {
    console.log('/users');
    res.send([
    {
     name: 'Bee',
     address: 'Unknown',
     occupation: 'Queen'
    },
    {
     name: 'Sunny',
     address:'Planet Earth',
     occupation: 'Professional Snuggler'
    }
]);
});

app.listen(3000, () => {
    console.log('server is up')
})