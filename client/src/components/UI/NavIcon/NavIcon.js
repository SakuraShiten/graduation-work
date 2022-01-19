import React from 'react';
import classes from './NavIcon.module.css'

function NavIcon({ ...props }) {
    return <div className={classes.icon} {...props}></div>;
}

export default NavIcon;
