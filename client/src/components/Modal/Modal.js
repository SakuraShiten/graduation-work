import React from 'react';
import classes from './Modal.module.css'

function SelectDataTime({ children, activeModal, setActiveModal, ...props }) {
    const classesArray = [classes['select-data-time']];
    if (activeModal) classesArray.push(classes['active']);
    return (
        <div  className={classesArray.join(' ')} onClick={() => setActiveModal(false)}>
            <div {...props} className={classes['select-data-time__content']} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default SelectDataTime;
