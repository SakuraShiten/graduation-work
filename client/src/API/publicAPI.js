import { $host } from "./index";


export const fetchNews = async () => {
    const { data } = await $host.post('api/news')
    return data
}
