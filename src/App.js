import "./App.css";
import { AppShell, MantineProvider } from "@mantine/core";
import Toolbar from "./components/Header/Toolbar";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import { colorPlates } from "./Theming/CustomColorPlates/Plates";

function App() {
  return (
    <div className="App">
      <MantineProvider theme={{
        colorScheme: 'light',
        colors: {
          custom: colorPlates.blue
        }
      }} >
          <Routes>
            {/* <Route exact path='/' element={<Home />}  /> */}
            {/* <Route exact path="/resume-editor" element={<Resume />} /> */}
            <Route exact path="/" element={<Resume />} />
          </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;

