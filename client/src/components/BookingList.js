import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import Card from './UI/Card/Card';
import Input from './UI/Input/Input';
import Select from './UI/Select/Select';
import UniversalButton from './UI/UniversalButton/UniversalButton'
import { bookingService, nameDaysWeek } from '../utils/const'
import { fetchDayBooking, fetchCreateClient, fetchCreateBooking } from '../API/publicAPI'

function BookingList() {

  const [activeModalDay, setActiveModalDay] = useState(false);
  const [activeCardDay, setActiveCardDay] = useState(null);

  const [activeModalTimes, setActiveModalTimes] = useState(false);
  const [activeCardTimes, setActiveCardTimes] = useState([]);
  const [optionsTimes, setOptionsTimes] = useState([])

  const [selectService, setSelectService] = useState(bookingService[0].value);

  const [bookingInfo, setBookingInfo] = useState({
    FIO: '',
    tel: '',
    email: '',
    day: '',
    service: selectService,
  });

  useEffect(() => {
    fetchDayBooking(activeCardDay).then(data => setOptionsTimes(data))
  }, [activeCardDay])

  const date = new Date();
  const dateList = []
  for (let i = 0; i < 7; i++) {
    const dayCount = new Date(date.getTime() + ((i + 1) * 24 * 60 * 60 * 1000))
    dateList.push({
      dayName: nameDaysWeek[dayCount.getDay()],
      dayNumber: dayCount.getDate()
    })
  }

  const listDefaultInput = [
    { placeholder: 'ФИО', data: "FIO" },
    { placeholder: 'Телефон', data: "tel" },
    { placeholder: 'Почта', data: "email" }
  ]

  const selectCardTime = (item) => {
    if (activeCardTimes.includes(item))
      setActiveCardTimes([...activeCardTimes.filter(t => t !== item)])
    else
      setActiveCardTimes([...activeCardTimes, item].sort())
  }

  const selectCardDay = (item) => {
    setActiveCardDay(item)
    setBookingInfo({ ...bookingInfo, day: item })
    setActiveModalDay(false)
    setActiveModalTimes(true)
  }

  const formAccept = async (e) => {
    e.preventDefault();
    const { _id } = await fetchCreateClient(bookingInfo.FIO, bookingInfo.tel, bookingInfo.email)
    const s = await fetchCreateBooking(bookingInfo.service, bookingInfo.day, activeCardTimes, "asd", _id)



    console.log(s);
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

      <Select
        options={bookingService}
        setSelectService={setSelectService}
        onChange={e => setBookingInfo({ ...bookingInfo, service: e.target.value })}
      />

      <Input
        placeholder="Дата и время"
        readOnly
        onClick={() => { setActiveModalDay(true); setActiveCardDay(null) }}
        value={activeCardDay && activeCardTimes.length ? `${activeCardDay} число - Выбранные часы: ${activeCardTimes.map(e => ' ' + e + ':00')}` : ""}
      />

      <UniversalButton type="submit" style={{ marginTop: 30 }}>Подтвердить бронь</UniversalButton>

      <Modal
        setActiveModal={setActiveModalDay}
        activeModal={activeModalDay}
      >
        {dateList.map(item =>
          <Card
            key={item.dayNumber}
            body={item.dayName}
            header={item.dayNumber}
            activeCard={item.dayNumber === activeCardDay}
            onClick={() => {selectCardDay(item.dayNumber); setActiveCardTimes([])}}
          />)}
      </Modal>

      <Modal
        setActiveModal={setActiveModalTimes}
        activeModal={activeModalTimes}
      >
        {optionsTimes.length
          ? optionsTimes.map(item =>
            <Card
              key={item}
              body={""}
              header={item + ":00"}
              onClick={() => selectCardTime(item)}
              activeCard={activeCardTimes.includes(item)}
            />)
          : <h2>Всё время занято</h2>
        }
        <UniversalButton
          style={{ width: "100%" }}
          type="button"
          onClick={() => { setActiveModalTimes(false) }}
        >
          Сохранить
        </UniversalButton>
      </Modal>

    </form >
  );
}

export default BookingList;
