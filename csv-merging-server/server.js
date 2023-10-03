const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/csvApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const upload = multer({ dest: 'uploads/' });

const csvSchema = new mongoose.Schema({
    filename: String,
    // Add fields to store CSV data as needed
});

const CsvModel = mongoose.model('CsvModel', csvSchema);

app.post('/upload', upload.array('csvFiles', 2), async (req, res) => {
    try {
        // const [csv1, csv2] = req.files;
        // const stats = {}; // Calculate statistics here

        // // Save data to MongoDB
        // const csvModel1 = new CsvModel({ filename: csv1.filename });
        // const csvModel2 = new CsvModel({ filename: csv2.filename });
        // await csvModel1.save();
        // await csvModel2.save();

        // Generate and save the result CSV

        res.json({ message: 'CSV files uploaded and processed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
