import './App.css';
import { AppShell } from '@mantine/core';
import Toolbar from './components/Header/Toolbar';

import {
  Route,
  Routes
} from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
        <AppShell
          header={<Toolbar />}
        >

        <Routes>
          <Route exact path='/' element={<Home />}  />
        </Routes>
          
        </AppShell>
    </div>
  );
}

export default App;
