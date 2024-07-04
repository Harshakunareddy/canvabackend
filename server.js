const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors({ credentials: true }));

app.use('/api', require('./routes/designRoutes'));
app.use('/api', require('./routes/authRoutes'));

app.use(express.static(path.join(__dirname, './frontend/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './', 'frontend', 'dist', 'index.html'));
});

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://kunareddyharshareddy:Harsha%409920@cluster0.uzqg8tx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Production database is connected...');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

dbConnect();

const PORT = process.env.PORT || 2300;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
