import './App.css';
import Header from './Header';
import Home from './Home';
import Try from './Try';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
          
      </Routes>
    </BrowserRouter>
  
      {/* <Videoadded/> */}

    </div>
  );
}

export default App;
