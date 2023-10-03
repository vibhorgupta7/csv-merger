import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CsvResult() {
    const [resultCsv, setResultCsv] = useState('');

    useEffect(() => {
        // Fetch the result CSV data from the backend
        axios.get('/getResultCsv').then((response) => {
        setResultCsv(response.data);
        });
    }, []);

    return (
        <div>
        <h2>Result CSV</h2>
        <pre>{resultCsv}</pre>
        </div>
    );
}

export default CsvResult;
