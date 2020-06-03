import React from 'react';
import './style.css';

const CheckRadioPreview = (props) => {
    return (
        <div style={{marginTop: '20px'}}>
            <p className="checkbox__title">
                {props.message}
            </p>
            {
                props.options && props.options.map((item, index) => (
                    <div key={index}>
                      <label style={{marginRight: '5px'}}>
                          {item.value}
                          <input type={props.type} />
                      </label>
                    </div>
                ))
            }
        </div>
    );
}

export default CheckRadioPreview;