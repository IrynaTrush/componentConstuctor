import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectType, selectOptions } from '../../redux/selectors/root.selector';
import { addOptions, createComponent, clearOptions } from '../../redux/actions/root.action';
import './style.css';

const AddComponent = () => {
    const inputTypes = useSelector(selectType);
    const currentOptions = useSelector(selectOptions);
    const dispatch = useDispatch();
    const [selectItem, setSelectItem] = useState('text');
    const [message, setMessage] = useState('')
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [optionValue, setOptionValue] = useState('');
    const data = {
        type: selectItem,
        message,
        options: currentOptions,
        minValue,
        maxValue, 
    }
    
    const reset = () => {
        setSelectItem('text');
        setMessage('')
    }
    
    const handleSelect = (e) => {
        setSelectItem(e.target.value);
    }

    const handleAddOption = (e) => {
        const option = {
            value: optionValue,
            id: currentOptions.length + 1
        }
       if(optionValue) {
        dispatch(addOptions(option));
        setOptionValue('');
       }
    }

    const handleSubmit = () => {
        if( message ) {
            if((selectItem === 'radio' || selectItem === 'checkbox') && currentOptions.length !== 0) {
                dispatch(createComponent(data))
            } else if (selectItem === 'range' && maxValue  && minValue ) {
                dispatch(createComponent(data))
            } else if( selectItem === 'text' || selectItem === 'password') {
                dispatch(createComponent(data))
            }
        }
        reset();
        dispatch(clearOptions())
    }
    return (
        <form className="form">
            <div>
                <p className="form__title">
                    Choose the type of your input:
                </p>
                <select 
                    onChange={handleSelect} 
                    className="form__select" 
                    value={selectItem}
                >
                    {
                        inputTypes.map((item, index) => (
                            <option value={item} key={index}>
                                {item}</option>
                            ))
                    }
                </select>
            </div>
            <input type="text" 
                placeholder="Message" 
                value={message} 
                className="form__input" 
                onChange={(e) => setMessage(e.target.value)}
            />
            {
                ((selectItem === 'radio' || selectItem === 'checkbox') &&
                <>
                    <div className="options">
                        {
                            currentOptions && currentOptions.map((item, index) => (
                                <div key={index}>
                                    <p className="options__item">{item.value}</p>
                                </div>
                            ))
                        }
                    </div>
                    {
                        currentOptions.length < 4 &&
                        <div>
                            <input placeholder="Option"  
                                className="option__input"
                                type="text" 
                                value={optionValue} 
                                onChange={(e) => {setOptionValue(e.target.value)}}
                            />
                            <button type="button"onClick={handleAddOption} 
                            className="option__btn">+</button>
                        </div>
                    }
                    </>) ||
                    ( selectItem === 'range' && <>
                        <input type="text" 
                            placeholder="Enter a min value" 
                            onChange={(e) => {setMinValue(e.target.value)}}
                            className="range__value"/>
                        <input type="text" 
                            placeholder="Enter a max value" 
                            onChange={(e) => {setMaxValue(e.target.value)}}
                            className="range__value"/>
                       </>
                    )
                }
            <button type="button" className="form__btn" onClick={handleSubmit}>
                 Add Component
            </button>
        </form>
    );
}

export default AddComponent;