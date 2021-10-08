const express = require('express');
const dotenv = require('dotenv');
const app = express();

/* Require DBConnection */
const { connectDB } = require('./config/db');

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

/* Laod Config */
dotenv.config({ path: './config/config.env' });
connectDB();

/* FIRST PATTERN */
app.use('/api/students', require('./routes/index'));

/* SECOND PATTERN */
// const loader = require('./routes/index');
// loader(app);

/* Routes */
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/api/students', (req, res) => {
  res.redirect('');
});

// require('./routes/index')(app);

/* Set port, Listen for requests */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
