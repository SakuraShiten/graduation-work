import React from 'react';

function SelectDataTime({ children, activeModal, setActiveModal }) {
    const classes = ['select-data-time'];
    if (activeModal) classes.push('active');
    return (
        <div className={classes.join(' ')} onClick={() => setActiveModal(false)}>
            <div className="select-data-time__content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default SelectDataTime;
