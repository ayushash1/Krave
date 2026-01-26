import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



// start the server on the specified port
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

// route for the root path
app.get('/', (req, res) => {
    res.send('Hello, World!');
})
