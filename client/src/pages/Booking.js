import React from 'react'
import BookingList from '../components/BookingList';
import '../styles/BookingPage.css'

function Booking() {
    return (
        <div className="booking-block">
            <h2>Бронирование</h2>
            <BookingList />
        </div>
    );
}

export default Booking;
