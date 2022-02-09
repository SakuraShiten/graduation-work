import React, { useEffect, useState } from 'react'
import UniversalButton from '../UI/UniversalButton/UniversalButton'
import Modal from '../Modal/Modal'
import { fetchGetAllBooking } from '../../API/publicAPI'
import CardClientBooking from '../CardClientBooking/CardClientBooking'

function ViewBooking() {

    const [modalBooking, setModalBooking] = useState(false)
    const [dataBooking, setDataBooking] = useState([])
    const [reloadData, setReloadData] = useState(false)

    useEffect(() => {
        fetchGetAllBooking()
            .then(data => setDataBooking(data.reverse()))
    }, [reloadData])

    return (
        <div>
            <UniversalButton
                styleWhite={true}
                onClick={() => setModalBooking(true)}>
                Просмотр бронирований
            </UniversalButton>
            <Modal style={{ display: 'flex', flexDirection: 'row', height: "70vh" }}
                activeModal={modalBooking}
                setActiveModal={setModalBooking}

            >
                {dataBooking.map(item =>
                    <CardClientBooking
                        key={item._id}
                        item={item}
                        reloadData={reloadData}
                        setReloadData={setReloadData}
                    />
                )}
            </Modal>
        </div>
    )
}

export default ViewBooking