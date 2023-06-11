import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import Dashboard from './components/Dashboard/Dashboard'
import QA from './components/QA/QA';
import { useState } from 'react';




function App() {
  
  const [song, setSong] = useState('song1.mp3')

  
  return (
    <div className="app">
      <Sidebar />
      <main className='content'>
        <Topbar song={song} setSong={setSong}/>
        <Content song={song}/>
        <Dashboard />
        <QA />
      </main>
    </div>
  );
}

export default App;
