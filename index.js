require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    ctrl = require('./controller'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);  // first one is a string saying how we are going to reference this when we get it, its value is the second argument which is our database 
    console.log('db connected')
})

app.post('/api/movies', ctrl.addMovies);
app.get('/api/movies', ctrl.getMovies);
app.put('/api/movies/:id', ctrl.updateMovies);
app.delete('/api/movies/:id', ctrl.deleteMovies);

app.listen(port, () => console.log(`Server running on ${port}`));