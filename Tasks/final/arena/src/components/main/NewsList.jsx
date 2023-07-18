const React = require("react");

const NewsList = () => {

    return <>
        <section className="news">
            <div className="container">
        <h1 className="news-title-h1" >NEWS</h1>
        <div className="news-wrapper">
          
            <div className="news-cards">
                <div className="news-item">
                    <h4>PROMOTIONS AND OFFERS</h4>
                    <img src="/public/assets/img/news/news1.jpg" alt="news"/>
                    <h3>Attention! Promotion 3 tickets for the price of 2!</h3>
                </div>
            </div>
            <div className="news-cards">
                <div className="news-item">
                    <h4>Attention</h4>
                    <img src="/public/assets/img/news/news2.jpg" alt="news"/>
                    <h3>Our filial in the Evikom shopping center is finishing work!</h3>
                </div>
            </div>
            <div className="news-cards">
                <div className="news-item">
                    <h4>CONCERTS AND EVENTS</h4>
                    <img src="/public/assets/img/news/news3.jpg" alt="news"/>
                    <h3>TROUBADOUR - ROYAL OPERA HOUSE 2022/23</h3>
                </div>
            </div>
            <div className="news-cards">
                <div className="news-item">
                    <h4>Children's Day!</h4>
                    <img src="/public/assets/img/news/news4.jpg" alt="news"/>
                    <h3>From June 1, children's tickets are free!</h3>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="corn-menu">
    <div className="container">
         <img src="/public/assets/img/corn.png" alt="popcorn"/>
    </div>
</div>
    </>
}

module.exports = NewsList;
