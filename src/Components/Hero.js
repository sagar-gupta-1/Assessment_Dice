import React, {useState} from 'react'
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import Filters from './Filters';

const Hero = () => {

const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

// usestate for storing api data 

  return (
    <div>
     <SearchBar onSearchQueryChange={handleSearchQueryChange} />
      <Filters setSort={setSort}/>
      {/* results todo:*/}
      <RepoList sort={sort} searchQuery={searchQuery} /> 
    </div>
  )
}

export default Hero