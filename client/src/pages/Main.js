import React from 'react';
import UniversalButton from '../components/UI/UniversalButton/UniversalButton';
import '../styles/MainPage.css'

function Main() {
    return <div className="main-block">
        <div className="main-block__content">
            <div className="main-block__info">
                <h1>Боулинг-ресторан в городе Салават</h1>
                <h2>В нашем заведении Вы можете найти:</h2>
                <div className="main-block__info-list">
                    <p>Танцпол</p>
                    <p>Караоке зал</p>
                    <p>Большой банкетный зал</p>
                    <p>Паровые коктейли</p>
                </div>
                {
                    <UniversalButton styleWhite={true}>
                        Забронировать
                    </UniversalButton>
                }
            </div>
            <div className="main-block__footer">
                <p>
                    Телефон для справок:<br></br>
                    8 (3476) 34-69-00<br></br>
                    8(917) 045-80-00
                </p>
                <p>
                    Время работы:<br></br>
                    Будние с 18.00 до 5:00<br></br>
                    Выходные и праздники с 10:00 до 7:00
                </p>
                <p>
                    Телефон доставки:<br></br>
                    8917 045 8000<br></br>
                    Время доставки:<br></br>
                    с 10:00 до 23:00
                </p>
                <p>
                    Адрес: Бульвар Салавата<br></br>
                    Юлаева 2/118
                </p>
            </div>
        </div>
    </div>;
}

export default Main;
