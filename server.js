import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();

app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb+srv://ayushjaiswal312:dn48H6iMWWwjRyRt@cluster0.9xasrmo.mongodb.net/Placement_Cell', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
  resave: false,
  saveUninitialized: true,
}));

app.use(authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
