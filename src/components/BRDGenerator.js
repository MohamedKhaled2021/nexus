import React, { useState } from 'react';
import axios from 'axios';

const BRDForm = () => {
  const [requirements, setRequirements] = useState('');
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDocument(null);

    try {
      const response = await axios.post('http://localhost:5000/api/generate-brd', {
        requirements,
      });

      setDocument(response.data);
    } catch (err) {
      setError('An error occurred while generating the document. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Generate Business Requirements Document (BRD)</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Enter project requirements here..."
          rows="10"
          cols="50"
          required
        />
        <br />
        <button type="submit">Generate BRD</button>
      </form>

      {loading && <p>Loading... Please wait while the document is being generated.</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {document && (
        <div>
          <h2>Generated BRD:</h2>
          <pre>{document}</pre>
        </div>
      )}
    </div>
  );
};

export default BRDForm;
