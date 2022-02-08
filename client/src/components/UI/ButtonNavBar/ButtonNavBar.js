import React from 'react'
import classes from './ButtonNavBar.module.css'

function ButtonNavBar({ children, activeButton, ...props }) {
    const classesArray = [classes.btn];
    if (activeButton)
        classesArray.push(classes.active)

    return <button className={classesArray.join(' ')} {...props}>{children}</button>;
}

export default ButtonNavBar;
