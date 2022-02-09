import React from 'react'
import CreateNews from './Moder/CreateNews';
import ViewBooking from './Moder/ViewBooking'
import ViewNews from './Moder/ViewNews';

function ModerPanel() {

    return (
        <div>
            <ViewBooking />
            <CreateNews />
            <ViewNews />
        </div>
    )
}

export default ModerPanel;
