import React, { useState } from 'react'
import UniversalButton from '../UI/UniversalButton/UniversalButton'
import Modal from '../Modal/Modal'
import Input from '../UI/Input/Input'
import {fetchCreateNews} from '../../API/publicAPI'

function CreateNews() {

    const [activeModal, setActiveModal] = useState(false)
    const [newsInfo, setNewsInfo] = useState({ header: '', body: '', image: '' })

    const selectFile = (e) => {
        setNewsInfo({ ...newsInfo, image: e.target.files[0] })
    }

    const formAccept = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('login', localStorage.getItem('login'))
        formData.append('password', localStorage.getItem('password'))
        formData.append('header', newsInfo.header)
        formData.append('body', newsInfo.body)
        formData.append('img', newsInfo.image)
        await fetchCreateNews(formData);

    }

    return (
        <div>
            <UniversalButton
                styleWhite={true}
                style={{ marginTop: 20 }}
                onClick={() => setActiveModal(true)}
            >
                Создать "Новость"
            </UniversalButton>
            <Modal
                activeModal={activeModal}
                setActiveModal={setActiveModal}
            >
                <form onSubmit={formAccept}>
                    <Input placeholder="Заголовок"
                        value={newsInfo.header}
                        onChange={e => setNewsInfo({ ...newsInfo, header: e.target.value })} />
                    <Input placeholder="Текст"
                        value={newsInfo.body}
                        onChange={e => setNewsInfo({ ...newsInfo, body: e.target.value })} />
                    <Input type="file" onChange={selectFile} />
                    <UniversalButton style={{ marginTop: 0 }} type="submit">Добавить</UniversalButton>
                </form>
            </Modal>
        </div>
    )
}

export default CreateNews