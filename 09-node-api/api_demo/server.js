console.log('server starting again!!!');

let database = {
  mango: 3,
  blueberry: 20,
  pear: 5,
};

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.listen(3005, () => {
  console.log('Server listening at: http://localhost:3005');
});

// routes with parameters
app.get('/add/:fruit/:count', (request, response) => {
  let fruit = request.params.fruit;
  let count = parseInt(request.params.count);
  database[fruit] += count;
  response.send({ message: 'thank you' });
});

app.get('/fruits', (request, response) => {
  response.send(database);
});
