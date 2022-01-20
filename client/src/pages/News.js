import React from 'react';
import UniversalButton from '../components/UI/UniversalButton/UniversalButton';
import '../styles/NewsPage.css'

function News() {
    return (
        <div className="news-block">
            <div className="news-block__text">
                <div className="new-block-text-header">
                    <h4>
                        Заголовок
                    </h4>
                    <h5>
                        18.01.2022
                    </h5>
                </div>
                <div className="news-block__text-body">
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse
                    </p>
                </div>
            </div>
            <div className="news-block__decorate">
                <div className="news-block__picture"></div>
                <div className="news-block__btns">
                    <UniversalButton style={{ marginRight: 30, marginTop: 60 }}>
                        Предыдущая новость
                    </UniversalButton>
                    <UniversalButton>
                        Следующая новость
                    </UniversalButton>
                </div>
            </div>
        </div>
    );
}

export default News;
