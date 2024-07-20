import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';

const app = express();

mongoose.connect('mongodb+srv://ayushjaiswal312:dn48H6iMWWwjRyRt@cluster0.9xasrmo.mongodb.net/Placement_Cell', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.use(authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
