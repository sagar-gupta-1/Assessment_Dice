import React, {useState} from 'react'
import SearchBar from './SearchBar';
import axios from 'axios';
import RepoList from './RepoList';

const Hero = () => {

  const [apiResponse, setApiResponse] = useState([]);
  const [filter, setFilter] = useState('select Filter');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState(true) //true=ascending

  const filterArr = ['Stars','Watcher Count', 'Score','Name','created_at','updated_at'];


  //   logic for sorting data
  const handleFilter = async (query, e ) => {
    setFilter(e);
    switch (e) {
        case filterArr[0]:
            await getApiResponse(query, `&sort=stars&order=${sortBy?'desc':'asc'}`) 
            // const starsResponse = apiResponse.sort((a, b) => b.stargazers_count - a.stargazers_count);
            // setApiResponse(starsResponse);
            break;
        case filterArr[1]:
            // await getApiResponse(query, `&sort=watchers_count&order=${sortBy?'desc':'asc'}`)
            if(sortBy === true){
                const watcherResponse = apiResponse.sort((a, b) => b.watchers_count - a.watchers_count);
                setApiResponse([...watcherResponse]);
            }else {
                const watcherResponse = apiResponse.sort((a, b) => a.watchers_count - b.watchers_count);
                setApiResponse([...watcherResponse]);    
            }
            break;
        case filterArr[2]:
            await getApiResponse(query, `&sort=score&order=${sortBy?'desc':'asc'}`)
            // const scoreResponse = apiResponse.sort((a, b) => b.score - a.score);
            // setApiResponse(scoreResponse);
            break;
        case filterArr[3]:
            await getApiResponse(query, `&sort=name&order=${sortBy?'asc':'desc'}`)
            // const nameResponse = apiResponse.sort((a, b) =>   a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 );
            // setApiResponse(nameResponse);
            break;
        case filterArr[4]:
            // await getApiResponse(query, `&sort=created_at&order=${sortBy?'asc':'desc'}`)
            if(sortBy === true){
                const createdResponse = apiResponse.sort((a, b) =>   b.created_at < a.created_at ? -1 : 1 );
                setApiResponse([...createdResponse]);
            }else{
                const createdResponse = apiResponse.sort((a, b) =>   a.created_at < b.created_at ? -1 : 1 );
                setApiResponse([...createdResponse]);
            }
            break;
        case filterArr[5]:
            // await getApiResponse(query, `&sort=updated_at&order=${sortBy?'desc':'asc'}`)
            if(sortBy === true){
                const updatedResponse = apiResponse.sort((a, b) =>   b.updated_at < a.updated_at ? -1 : 1 );
                setApiResponse([...updatedResponse]);
            }else{
                const updatedResponse = apiResponse.sort((a, b) =>   a.updated_at < b.updated_at ? -1 : 1 );
                setApiResponse([...updatedResponse]);    
            }
            break;
        default:
           setApiResponse(apiResponse);
           break;
      }
  }

//  fetching data from API
  const getApiResponse = async ( query, searchBy = "") => {
    
        const query_= query.trim()
        if(query_ !== ''){
            var url = `https://api.github.com/search/repositories?q=${query}${searchBy}`
            console.log(url);
            setIsLoading(true);
            try {
            const response = await axios.get(url);
            setApiResponse(response.data.items);
            } catch (error) {
            console.error('Error fetching repositories:', error);
            setApiResponse([]);
            }
            setIsLoading(false);
         }

  }

  return (
    <div>
      <SearchBar
        getApiResponse={getApiResponse}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        handleFilter={handleFilter}
        filterArr={filterArr}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <RepoList 
        isLoading={isLoading} 
        apiResponse={apiResponse} 
      />
    </div>
  );
}

export default Hero