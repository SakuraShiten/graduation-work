import React, { useState } from 'react';
import Modal from './Modal';
import Card from './UI/Card/Card';
import Input from './UI/Input/Input';
import UniversalButton from './UI/UniversalButton/UniversalButton';

function BookingList() {

  const test = [
    { dayName: "Понедельние", dayNumber: 12 },
    { dayName: "Вторник", dayNumber: 14 },
    { dayName: "Понедельние", dayNumber: 16 },
    { dayName: "Вторник", dayNumber: 19 },
    { dayName: "Понедельние", dayNumber: 10 },
    { dayName: "Вторник", dayNumber: 1 },
    { dayName: "Понедельние", dayNumber: 4 },
  ]
  const test1 = [
    "18", "19", "20", "21", "22", "23", "0", "1", "2", "3", "4", "5", "6"
  ]

  const [activeCard, setActiveCard] = useState(null);

  const [selectTimes, setSelectedTimes] = useState([]);

  const [bookingInfo, setBookingInfo] = useState({
    FIO: '',
    tel: '',
    email: '',
    dataTime: ''
  });

  const listDefaultInput = [
    { placeholder: 'ФИО', data: "FIO" },
    { placeholder: 'Телефон', data: "tel" },
    { placeholder: 'Почта', data: "email" }
  ]
  const [dataTime, setDataTime] = useState({});

  const [activeModalDay, setActiveModalDay] = useState(false);
  const [activeModalTimes, setActiveModalTimes] = useState(false);


  const formAccept = (e) => {
    e.preventDefault();
    setDataTime({
      day: activeCard,
      times: [...selectTimes]
    })
    console.log(selectTimes);
  }

  const selectCardTime = (item) => {

    if (selectTimes.includes(item))
      setSelectedTimes([...selectTimes.filter(t => t !== item)].sort())
    else setSelectedTimes([...selectTimes, item].sort());


  }

  var days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  const d = new Date();
  const n = d.getDay();

  const selectCardDay = (item) => {
    setActiveCard(item)
    setActiveModalDay(false)
    setActiveModalTimes(true)
  }

  return (
    <form className="booking-block__content" onSubmit={formAccept}>
      {
        listDefaultInput.map(inpt =>
          <Input
            key={inpt.data}
            onChange={e => { setBookingInfo({ ...bookingInfo, [inpt.data]: e.target.value }) }}
            placeholder={inpt.placeholder}
          />
        )
      }
      <Input
        placeholder="Дата и время"
        readOnly
        onClick={() => setActiveModalDay(true)}
        value={activeCard && selectTimes[0] ? `${days[n]} - Выбранные часы: ${selectTimes.map(e => ' ' + e + ':00')}` : ""}
      />
      <UniversalButton type="submit" style={{ marginTop: 30 }}>Подтвердить бронь</UniversalButton>
      <Modal
        setActiveModal={setActiveModalDay}
        activeModal={activeModalDay}
      >
        {test.map(item =>
          <Card
            key={item.dayNumber}
            body={item.dayName}
            header={item.dayNumber}
            activeCard={item.dayNumber === activeCard}
            onClick={() => selectCardDay(item.dayNumber)}
          />)}

      </Modal>

      <Modal
        setActiveModal={setActiveModalTimes}
        activeModal={activeModalTimes}
      >
        {test1.map(item =>
          <Card
            key={item}
            body={""}
            header={item + ":00"}
            onClick={() => selectCardTime(item)}
            activeCard={selectTimes.includes(item)}
          />)}
        <UniversalButton
          onClick={() => setActiveModalTimes(false)}
        >
          Сохранить
        </UniversalButton>
      </Modal>

    </form >
  );
}

export default BookingList;
