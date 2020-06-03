import React from 'react';
import './style.css';

const InputPreview = (props) => {
    return (
        <div style={{marginTop: '20px'}}>
            <label>
                {props.message}
                <input type={props.type} className="preview__input" />
            </label>
        </div>
    );
}

export default InputPreview;