import express from 'express';
import cors from 'cors';
import canonizeUserName from './canonizeUserName';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
//     hello: 'testing for request',
  });
});

app.get('/task2b', (req, res) => { // запрос на http://localhost:3000/task2b?
  const fullname = req.query.fullname; // take name from a fullname
  res.send(canonizeUserName(fullname)); // message in to browser
});

app.listen(3000, () => {
  //console.log('Your app listening on port 3000!');
});
