 import Navigation from "./components/navigation";
 import Side from "./components/side";
 import Main from "./components/mainScreen";
 import {animate, delay, motion} from "framer-motion";
 import React from "react";


 function App() {
    const [move,setMove] = React.useState(false)
    return(
        <div className ='screen'>
            <Side />
            <div className  ='main'>
                <Navigation/> <Main/>
            </div> 
            <div className="imgs">
                <img className="circle" src = "images\ellipse 3.png" alt = "shoe" />
                <img className="circle2" src = "images\ellipse 1.png" alt = "shoe" />
                <img className="circle3" src = "images\ellipse 1.png" alt = "shoe" />   
                <img className="shoe" src = "images\shoe.png" alt = "shoe" />

                
            </div>
            
        </div>
    );
 }

 export default App;