import './App.css';
import Header from './Header';
import Home from './Home';
import Try from './Try';
import About_us from './About_us';
import Donate_us from './Donate_us';



import Videoadded from './Videoadded';
// import Videoadded from './Videoadded';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
function App() {
  return (
    <div className="App h-screen">

       <BrowserRouter>
       <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      
          <Route path="/try" element={<Try />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About_us />} />

          <Route path="/donate_us" element={<Donate_us />} />

          
      </Routes>
    </BrowserRouter>
  
      {/* <Videoadded/> */}

    </div>
  );
}

export default App;
