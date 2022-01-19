import React from 'react';
import classes from './UniversalButton.module.css'

function UniversalButton({ children, marginTop = 60, styleWhite = false, ...props }) {
    return <button
        style={{ marginTop }}
        className={styleWhite
            ? classes.btnWhite
            : classes.btnBlack}
        {...props}>{children}</button>;
}

export default UniversalButton;
