import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Row, Container} from 'react-bootstrap';
// import SortRepo from './SortRepo';
import RepoCard from './RepoCard';

function RepoList({ searchQuery, sort }) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

 console.log(sort);

 console.log(repos);



  useEffect(() => {

    const fetchRepos = async () => {
      if (!searchQuery) {
        setRepos([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}`);
        setRepos(response.data.items);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setRepos([]);
      }
      setIsLoading(false);
    };

    if(sort === 'stars'){ 
        setRepos((prev) => {
          const sortedRepos = prev.sort((a,b) => b.stargazers_count - a.stargazers_count) ;
          return [...sortedRepos]
      });
      }
      else if(searchQuery !== ''){
        fetchRepos();
      }
  }, [sort, searchQuery]);


  return (
    <Container>
      {isLoading ? <p>Loading repositories...</p> : (
        <Row>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </Row>
      )}
    </Container>
  );
}

export default RepoList;
