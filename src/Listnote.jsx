import React from 'react';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';


const Listnote = (props) =>{

    return(
        <>
        <div className = "todo_style">
        <li>
        <CancelSharpIcon 
            fontSize='medium'
            color='secondary'
            onClick={() =>{props.onSelect(props.id)}} />
         {props.text}
         </li>
         </div>
        </>
    );
}



export default Listnote; 