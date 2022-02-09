import { $host } from "./index";


export const fetchNews = async () => {
    const { data } = await $host.post('api/news')
    return data
}
export const fetchDayBooking = async (day) => {
    const { data } = await $host.post('api/booking/space', { day })
    return data
}
export const fetchCreateBooking = async (service, date, time, about = "111", idUser) => {
    const { data } = await $host.post('api/booking/create',
        { service, data: date, time: JSON.stringify(time), about, id: idUser })
    return data
}
export const fetchCreateClient = async (fio, tel, mail) => {
    const { data } = await $host.post('api/client/create',
        { fio, tel, mail })
    return data
}
export const fetchCreateCheckAuth = async (login, password) => {
    const { data } = await $host.post('api/user/check',
        { login, password })
    return data
}
////////////////////////////////////////////////////////////////
export const fetchGetAllBooking = async () => {
    const { data } = await $host.post('api/booking/')
    return data
}
export const fetchCancelBooking = async (login, password, id) => {
    const { data } = await $host.post('api/booking/cancel', { login, password, id })
    return data
}
export const fetchCreateNews = async (news) => {
    const { data } = await $host.post('api/news/create', news)
    return data
}

export const fetchDeleteNews = async (id, login, password) => {
    const { data } = await $host.post('api/news/delete', { id, login, password })
    return data
}