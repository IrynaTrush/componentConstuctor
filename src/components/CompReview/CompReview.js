import React from 'react';
import { useSelector } from 'react-redux';
import InputPreview from '../InputPreview';
import CheckRadioPreview from '../CheckRadioPreview';
import RangeComponent from '../RangeComponent';
import { selectComponents } from '../../redux/selectors/root.selector';

const CompReview = () => {
  const currentComponent = useSelector(selectComponents);
 
  const generateInput = (item) => {
    const generateInputPreview = () =>{
     return ( <InputPreview 
      type={item.type}
      message={item.message}
   />)
    }
    const generateCheckoxPreiew = () => {
      return (<CheckRadioPreview 
        
          type={item.type}
          message={item.message}
          options={item.options}
       />)
    }
    const generateRangePreview = () => {
      return (<RangeComponent 
        type={item.type} 
        max={item.maxValue}
        min={item.minValue} 
        message={item.message} 
        
 />)
    }
    const types = {text: generateInputPreview,
    password: generateInputPreview,
    radio: generateCheckoxPreiew,
    checkbox: generateCheckoxPreiew,
    range: generateRangePreview,
    }
    return types[item.type]()
  }
  return(
        <div>
            <h1 style={{textAlign: "center"}}>Component Preview</h1>
            <div style={{textAlign: 'center'}}>
               {
                   currentComponent && currentComponent.map((item, index) => generateInput(item))
               }
            </div>
        </div>
    );
}

export default CompReview;