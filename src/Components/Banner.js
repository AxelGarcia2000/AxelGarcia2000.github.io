import React from "react";
import './Banner.css';

function Banner({numero,titulo1,numero2,titulo6}){
    return(
        <div className="Banner">
           <p>{titulo6}</p>
           <p>{numero}</p>
           <p>{titulo1}</p>
           <p>{numero2}</p>
        </div>
    )
}
export default Banner;

//numero={8}
//titulo1= "/Oct/"
//numero2={2021}