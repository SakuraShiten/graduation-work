import React from 'react';
import classes from './NavbarDesign.module.css'

function MyNavBar({ children }) {
    return <div className={classes.navBar}>
        <div className={classes.navBar__content}>
            {children}
        </div>
    </div>;
}

export default MyNavBar;
