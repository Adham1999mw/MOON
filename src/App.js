import React from "react";
import Nav from "./component/navbar/Nav";
import { BrowserRouter,  Route } from "react-router-dom";
import Home from "./component/home/Home";
import Destination from "./component/Destination/Destination";
import Crew from "./component/crew/crew";
import Tech from "./component/tech/tech";




const App = ()=>{
    return(
        
        <BrowserRouter>
        <div>
        
        <Nav />
            
            <Route exact path="/" component={Home}/> 
            <Route path="/destination" component={Destination}/> 
            <Route path="/Crew" component={Crew}/> 
            <Route path="/Technology" component={Tech}/> 

            




        

    
        </div>
        </BrowserRouter>
        
    )
}

export default App