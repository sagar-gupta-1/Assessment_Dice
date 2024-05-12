import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './Components/Hero';

function App() {  

  return (
    <div className='d-flex flex-column '>
      <h1 className='text-white-50 align-self-center py-2'>Github Repo Search</h1>
      <Hero />
    </div>
  );
}

export default App;
