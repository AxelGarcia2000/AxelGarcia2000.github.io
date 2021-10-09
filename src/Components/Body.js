import React from 'react';
import './Body.css'

function Body(props){
    return(
        <div className="Body">
        <p>{props.texto2}</p>
        {props.texto3}
        <p>{props.texto4}</p>
        {props.texto5}
        <p>{props.texto6}</p>
        {props.texto7}
        <p>{props.texto8}</p>       

        <button variant="button" class="btn-primary">Clic</button>
        </div>
    )
}

export default Body;