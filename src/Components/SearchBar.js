import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SearchBar({getApiResponse, setSearchQuery, searchQuery, filter, handleFilter, filterArr, sortBy, setSortBy}) {


  const handleSubmit = (event) => {

    const input = document.getElementById("search-input").value.trim()
    if(input !== null){
      event.preventDefault();
      setSearchQuery(input)
      getApiResponse(input);
    }
    else{
      console.alert("Please enter a search term.")
      getApiResponse('');
    } 

  };


  return (
    <>
    <Form style={{maxWidth: '500px'}} onSubmit={handleSubmit} className="d-flex m-auto">  
      <Form.Control type="text" placeholder="Search Repo..." id="search-input"  />    
        <Button className='ms-2' variant="primary" type="submit">
          Submit
        </Button>
    </Form>
      
    <div className='d-flex justify-content-center my-4'>
      <DropdownButton
        as={ButtonGroup}
        id='dropdown-variants-secondary'
        variant= 'secondary'
        title= {filter}
      >        
      {filterArr.map((fil, index) => (
        <Dropdown.Item key={index} onClick={() => {handleFilter(searchQuery, fil)}}>{fil}</Dropdown.Item> 
      ))}         
      </DropdownButton>
      {/* ascending and descending button */}
      <Button className='p-2 ms-4' style={{width: '5rem'}} variant='secondary' onClick={() => {
        setSortBy(!sortBy)
        handleFilter( searchQuery, filter)
        }}>{sortBy ? 'Asc' : 'Desc'} </Button>
    </div>
    </>
  );
}

export default SearchBar;
