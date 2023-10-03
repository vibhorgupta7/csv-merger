import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [csvFile1, setCsvFile1] = useState(null);
    const [csvFile2, setCsvFile2] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange1 = (e) => {
        setCsvFile1(e.target.files[0]);
    };

    const handleFileChange2 = (e) => {
        setCsvFile2(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
        if (!csvFile1 || !csvFile2) {
            setMessage('Please select two CSV files.');
            return;
        }

        const formData = new FormData();
        formData.append('csvFiles', csvFile1);
        formData.append('csvFiles', csvFile2);

        await axios.post('/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        setMessage('CSV files uploaded and processed successfully.');
        } catch (error) {
        setMessage('Error uploading CSV files.');
        }
    };

    return (
        <div>
        <h2>Upload CSV Files</h2>
        <input type="file" accept=".csv" onChange={handleFileChange1} />
        <input type="file" accept=".csv" onChange={handleFileChange2} />
        <button onClick={handleUpload}>Upload</button>
        {message && <p>{message}</p>}
        </div>
    );
}

export default FileUpload;
