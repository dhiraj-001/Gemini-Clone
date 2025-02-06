import React, { useState } from 'react';
import TopBar from './TopBar'; // Assuming TopBar is imported

import SearchBar from './SearchBar';
function Home() {
  const [isHistory, setIsHistory] = useState(false);

  return (
    <div className="h-[100vh]">
      <TopBar />
      <div className="flex justify-center relative min-h-[calc(100vh-79px)] items-center overflow-hidden">
        {isHistory ? (
          <div>History Page</div>
        ) : (
          <div>
            <h1 className="text-5xl font-head font-semibold text-gradient">Hello, Dev</h1>
          </div>
        )}
        <div className='absolute bottom-5'>
          
          <SearchBar/>
        </div>
        
      </div>
      
    </div>
  );
}

export default Home;
