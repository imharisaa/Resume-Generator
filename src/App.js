import './App.css';
import { AppShell } from '@mantine/core';
import Toolbar from './components/Header/Toolbar';

import {
  Route,
  Routes
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Resume from './Pages/Resume/Resume';

function App() {
  return (
    <div className="App">
        <AppShell
          header={<Toolbar />}
        >

        <Routes>
          {/* <Route exact path='/' element={<Home />}  /> */}
          {/* <Route exact path="/resume-editor" element={<Resume />} /> */}
          <Route exact path="/" element={<Resume />} />
        </Routes>
          
        </AppShell>
    </div>
  );
}

export default App;
