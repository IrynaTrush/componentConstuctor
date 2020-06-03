import React from 'react';
import './style.css';

const CreatedComponent = (props) => {
   return (
     <div >
         <select className="component__select">
             <option defaultValue>{props.type}</option>
         </select>
         <input value={props.message} className="component__input" readOnly/>
         <button type="button" 
            className="component__btn" 
            onClick={props.onClick} 
            title="delete component">-
          </button>
     </div>
   );
}

export default CreatedComponent;