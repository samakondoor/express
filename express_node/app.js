const express = require('express')
const app = express()
app.get('/', (req,res) => {
    
    res.send({
        name:'james bond',
        like: [
            'cars',
            'gadgets'
        ]
    });
});
app.get('/about', (req,res) => {
    res.send('this is about page');
});
app.get('/contact', (req,res)  => {
    res.send('this is about contact');
});
app.get('/company', (req,res)  => {
    res.send('this is about company');
});
app.listen(3000);