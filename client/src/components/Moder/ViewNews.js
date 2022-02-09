import React, { useEffect, useState } from 'react'
import UniversalButton from '../UI/UniversalButton/UniversalButton'
import Modal from '../Modal/Modal'
import { fetchNews } from '../../API/publicAPI'
import CardNewsView from '../CardNewsView/CardNewsView'

function ViewNews() {

    const [activeModal, setActiveModal] = useState(false)
    const [newsData, setNewsData] = useState([])
    const [reloadData,setReloadData] = useState(false)

    useEffect(() => {
        fetchNews().then(data => { setNewsData(data); console.log(data) })
    }, [reloadData])

    return (
        <div>
            <UniversalButton
                style={{ marginTop: 20 }}
                styleWhite={true}
                onClick={() => setActiveModal(true)}
            >
                Просмотр "Новостей"
            </UniversalButton>
            <Modal
                style={{ display: "flex",flexDirection: "column"}}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
            >
                {newsData.length
                    ? newsData.map(item =>
                        <CardNewsView
                            header={item.header}
                            date={item.date}
                            _id={item._id}
                            reloadData={reloadData}
                            setReloadData={setReloadData}
                        />
                    )
                    : null}
            </Modal>
        </div>
    )
}

export default ViewNews