import React from 'react'
import UniversalButton from '../UI/UniversalButton/UniversalButton'
import classes from './CardNewsView.module.css'
import { fetchDeleteNews } from '../../API/publicAPI'

function CardNewsView({ header, date, _id, reloadData, setReloadData }) {

    const deleteNews = async () => {
        await fetchDeleteNews(_id, localStorage.getItem('login'), localStorage.getItem('password'))
        setReloadData(!reloadData)
    }

    return (
        <div className={classes.main}>
            <div>
                <p><b>Заголовок: </b>{header}</p>
                <p><b>Число: </b>{new Date(date).toLocaleString()}</p>
            </div>
            <UniversalButton
                onClick={deleteNews}
                style={{ marginTop: 0 }}
            >Удалить</UniversalButton>
        </div>
    )
}

export default CardNewsView