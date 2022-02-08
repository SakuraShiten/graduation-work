import React from 'react';
import { fetchCancelBooking } from '../../API/publicAPI';
import UniversalButton from '../UI/UniversalButton/UniversalButton';
import classes from './CardClientBooking.module.css'

function CardClientBooking({ item, setReloadData, reloadData }) {
    const { fio, tel, mail } = item.ownerClient;
    const { data, service, time, _id } = item;


    const cancelBooking = async (id) => {
        const data = await fetchCancelBooking(localStorage.getItem("login"),
            localStorage.getItem("password"), id)
        console.log(data)
        setReloadData(!reloadData)
    }

    return (
        <div className={classes.block}>
            <div className={classes.header}>
                <p><b>ФИО</b> {fio}</p>
                <p><b>Тел</b> {tel}</p>
                <p><b>Почта</b> {mail}</p>
            </div>
            <div className={classes.main}>
                <p><b>День</b> {data}</p>
                <p><b>Услуга</b> {service}</p>
                <p><b>Статус</b> {item.status}</p>

            </div>
            <p style={{ textAlign: 'left' }}><b>Время</b> {JSON.parse(time).map(i => i + ':00').join(", ")}</p>
            <UniversalButton style={{ marginTop: 10 }}
                onClick={() => cancelBooking(_id)}
            >Отменить бронирование</UniversalButton>
        </div>
    );
}

export default CardClientBooking;
