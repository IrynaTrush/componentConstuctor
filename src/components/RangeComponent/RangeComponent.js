import React from 'react';
import './style.css';

const RangeComponent = (props) => {
    return(
        <div style={{marginTop: '20px'}}>
            <label className="label__range">
                {props.message}
                <input type={props.type}
                max={props.maxValue}
                min={props.minValue} 
                style={{marinLeft: '5px'}}/>
            </label>
        </div>
    );
}

export default RangeComponent;