import React from 'react';
import classes from './Card.module.css'

function Card({ body, header, activeCard = false, ...props }) {
    const classesArray = [classes.card]
    if (activeCard) classesArray.push(classes.active)
    if (body.length > 7) body = body.substr(0, 7) + '...'
    return (
        <div className={classesArray.join(' ')} {...props}>
            <h3>{header}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Card;
