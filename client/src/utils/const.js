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