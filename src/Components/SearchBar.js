import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

function SearchBar({onSearchQueryChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSearchQueryChange(searchTerm); // Pass the search term to the parent component
  };

  return (
    <>
    <Form style={{maxWidth: '500px'}} onSubmit={handleSubmit} className="d-flex m-auto">  
      <Form.Control type="text" placeholder="Search Repo..."  value={searchTerm} onChange={handleInputChange} />    
      <Button variant="primary" type="submit">
          Submit
      </Button>
    </Form>
    </>
  );
}

export default SearchBar;
