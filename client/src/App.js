import React from 'react';
import Jobs from './components/Jobs';
import './App.css';

const mockJobs = [
  { title: 'SWE-1', company: 'Google' },
  { title: 'SWE-1', company: 'Facebook' },
  { title: 'SWE-1', company: 'Apple' }
];

function App() {
  return (
    <div className='App'>
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
