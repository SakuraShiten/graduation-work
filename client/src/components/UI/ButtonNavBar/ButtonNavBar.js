import React from 'react'
import classes from './ButtonNavBar.module.css'

function ButtonNavBar({ children, selectPage, urlPage, ...props }) {
    const classesArray = [classes.btn];
    if (selectPage === urlPage)
        classesArray.push(classes.active)

    return <button className={classesArray.join(' ')} {...props}>{children}</button>;
}

export default ButtonNavBar;
