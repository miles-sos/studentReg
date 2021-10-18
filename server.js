const express = require('express');
const dotenv = require('dotenv');
const app = express();

/* Laod Config */
dotenv.config({ path: 'config.env' });

/* Require DBConnection */
const { connectDB } = require('./config/db');

/* Invoking the DB_connect function */
// connectDB();

/* Connecting to MongoDB ATLAS */
require('mongoose')
  .connect(process.env.ATLAS_DB)
  .then((con) => console.log(`Connect to ATLAS DB: ${con.connection.host}`))
  .catch((err) => console.log(`Could not connect: ${err}`));

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

/* FIRST PATTERN */
app.use('/api/students', require('./routes/index'));

/* SECOND PATTERN */
// const loader = require('./routes/index');
// loader(app);
/////////////// OR //////////////////
// require('./routes/index')(app);

/* Routes */
app.get('/', (req, res) => {
  // res.render('index');
  res.redirect('/home');
});

///////////////////////////////////////////////////////////////
app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/registration', (req, res) => {
  res.render('registration');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/secretPage', (req, res) => {
  res.render('secretPage');
});
///////////////////////////////////////////////////////////////

app.post('/api/students', (req, res) => {
  res.redirect('');
});

/* Set port, Listen for requests */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
