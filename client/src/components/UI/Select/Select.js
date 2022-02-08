import React from 'react';
import classes from './Select.module.css'

function Select({ setSelectService, options, ...props }) {
    return <select
        onChange={e => setSelectService(e.target.value)}
        className={classes.inpt}
        {...props}
    >
        {options.map(option =>
            <option
                key={option.value}
                value={option.value}
            >
                {option.value}
            </option>
        )}
    </select>;
}

export default Select;
