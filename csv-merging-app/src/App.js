import React from 'react';
import './App.css';
import FileUpload from './FileUpload';
import CsvResult from './CsvResult';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN CSV App</h1>
      </header>
      <main>
        <FileUpload />
        <CsvResult />
      </main>
    </div>
  );
}

export default App;
