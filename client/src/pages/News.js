import React, { useEffect, useState } from 'react';
import UniversalButton from '../components/UI/UniversalButton/UniversalButton';
import '../styles/NewsPage.css'
import { fetchNews } from '../API/publicAPI'

function News() {
    const [news, setNews] = new useState(null)
    const [selectedNews, setSelectedNews] = new useState(0)

    useEffect(() => {
        fetchNews().then(data => { setNews(data) })
    }, [])

    const changeNews = (count) => {
        const newCount = (selectedNews + count > news.length - 1)
            ? 0
            : (selectedNews + count < 0)
                ? news.length - 1
                : selectedNews + count
        setSelectedNews(newCount)

    }

    return (
        <div className="news-block">
            <div className="news-block__text">
                <div className="new-block-text-header">
                    <h4>
                        {news
                            ? news[selectedNews].header
                            : ""
                        }
                    </h4>
                    <h5>
                        {news
                            ? news[selectedNews].date
                            : ""
                        }
                    </h5>
                </div>
                <div className="news-block__text-body">
                    <p>{news
                        ? news[selectedNews].body
                        : ""
                    }
                    </p>
                </div>
            </div>
            <div className="news-block__decorate">
                <img src={news
                    ? process.env.REACT_APP_API_URL + "/image/" + news[selectedNews].img
                    : ""
                } className="news-block__picture" alt=''></img>
                <div className="news-block__btns">
                    <UniversalButton onClick={() => changeNews(-1)}
                        style={{ marginRight: 30, marginTop: 60 }}
                    >
                        Предыдущая новость
                    </UniversalButton>
                    <UniversalButton
                        onClick={() => changeNews(+1)}
                    >
                        Следующая новость
                    </UniversalButton>
                </div>
            </div>
        </div >
    );
}

export default News;
