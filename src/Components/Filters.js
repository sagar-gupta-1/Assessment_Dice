import React, {useState} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Filters = ({setSort}) => {

  const filterArr = ['Stars',
    'Watcher Count',
    'Score',
    'Name',
   'created_at',
    'updated_at']

    const [filter, setFilter] = useState('select Filter')

    const handleFilter = (e) => {
      setFilter(e);
 
    }

  return (
    
    <div className='d-flex justify-content-center my-4'>
      <DropdownButton
        as={ButtonGroup}
        id='dropdown-variants-secondary'
        variant= 'secondary'
        title= {filter}
      >        
        {
        filterArr.map(
          (fil, index) => (
        <Dropdown.Item value={index} onClick={() => {handleFilter(fil)}}>{fil}</Dropdown.Item> 
        ))
        }     
    
      </DropdownButton>
    </div>
  )
}

export default Filters