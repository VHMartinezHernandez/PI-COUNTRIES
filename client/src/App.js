import {Route, useLocation}  from "react-router-dom";
import Landing from "./views/landing/landing";
import Home from "./views/home/home"
import Detail from "./views/detail/detail"
import Form from "./views/form/form";
import Navbar from "./components/navbar/navbar";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
 const location = useLocation() 
 
  return (    
    <div>      
      {location.pathname!== "/" &&<Navbar />}
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route exact path="/form" component={Form}/>   

      
      
    </div>
    
  );
}

export default App;
