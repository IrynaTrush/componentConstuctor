import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComponents } from '../../redux/selectors/root.selector';
import { deleteComponent } from '../../redux/actions/root.action';
import CreatedComponent from '../CreatedComponent';
import AddComponent from '../AddComponent';
import './style.css';


const CompConfig = () => {
    const currentComponent = useSelector(selectComponents);
    const dispatch = useDispatch();
    
    const deleteComp = (id) => {
        dispatch(deleteComponent(id))
    }
    return (
        <>
            <h1 style={{textAlign: 'center'}}>
                Components Config
            </h1>
            <div className="components">
                {currentComponent && currentComponent.map((item, index) => (
                    <div className="component__wrap" key={Math.random()} >
                        <CreatedComponent
                            type={item.type}
                            message={item.message}
                            onClick={() => deleteComp(index)}
                        />
                        {
                            ((item.type === 'checkbox' || item.type === 'radio') &&
                            <div className="options__wrapper" >{item.options.map(item => (
                            <p className="option__value" key={Math.random()}>{item.value}</p>))
                        }
                    </div>
                        ) ||
                        (item.type === 'range' && <div className="options__wrapper">
                            <p className="option__value">{item.minValue}</p>
                            <p className="option__value">{item.maxValue}</p>
                           
                        </div>)
                    }
                    </div>
                ))
                }
            </div>
            <AddComponent />
        </>
    );
}

export default CompConfig;