import Main from '../pages/Main'
import News from '../pages/News'
import Booking from '../pages/Booking'


export const publicRoutes = [
    {
        patch: "/",
        component: Main,
        name: "Главная"
    },
    {
        patch: "/news",
        component: News,
        name: "Новости"
    },
    {
        patch: "/booking",
        component: Booking,
        name: "Забронировать"
    }
]

export const bookingService = [
    { value: "Боулинг" },
    { value: "Караоке зал" },
    { value: "Танцпол" }
]

export const nameDaysWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
]