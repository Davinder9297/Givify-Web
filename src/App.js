import './App.css';
import Header from './Header';
import Home from './Home';
import Try from './Try';
import Videoadded from './Videoadded';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App h-screen">

       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      
          <Route path="/try" element={<Try />} />
          <Route path="/try" element={<Try />} />

     
      </Routes>
    </BrowserRouter>
  
      {/* <Videoadded/> */}

    </div>
  );
}

export default App;
