const React = require("react");

const ArticleList = (props) => {

    return <>
        <div className="filter-wrapper">
  <div className="filter">
    <button className="button button_all" data-filter="all">All</button>
    <button className="button button_action" data-filter="action">Action</button>
    <button className="button button_family" data-filter="family">Family</button>
    <button className="button button_melodrama" data-filter="melodrama">Melodrama</button>
  </div>
</div>
<div className="container moovi-cards">
  <div className="container-card">
    <div className="card action cards">
            <div className="img-wrapper">
                <img  className="cards-img" src="/public/assets/img/card/card-img-1.jpeg" alt="film"/>
                    <div className="trailer">
                        <button id="myBtn" className="btn btn-light card-img-btn" >Trailer</button>
                        <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/E3lBAjT-ftE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        </div>
                    </div>
            </div>  
            <h3 className="cards-title"><a href="/film-1">The Beast</a></h3>
            <a href="/film-1" type="button" className="btn btn-light card-btn">Buy Ticket</a>
            
    </div>
    <div className="card family cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-3.jpeg" alt="film"/>
            <a href="https://youtu.be/uYPbbksJxIg" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
            
        <h3 className="cards-title"><a href="/film-2">Oppenheimer</a></h3>
        <a href="/film-2" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card melodrama cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-4.jpeg" alt="film"/>
            <a href="https://youtu.be/uYPbbksJxIg" target="blank" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title"><a href="/film-3">Trace</a></h3>
        <a href="/film-3" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card family cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-10.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title"><a href="/film-4">BARBIE</a></h3>
        <a href="/film-4" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card action cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-2.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title"><a href="/film-5">Аvatar 2</a></h3>
        <a href="/film-5" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card melodrama cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-5.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title small"><a href="/film-6">Ticket to Paradise</a></h3>
        <a href="/film-6" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card melodrama cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-9.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title"><a href="/film-7">Maigred</a></h3>
        <a href="/film-7" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card family cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-6.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title"><a href="/film-8">Solstice</a></h3>
        <a href="/film-8" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card action cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-7.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title"><a href="/film-9">Amsterdam</a></h3>
        <a href="/film-9" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card action cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-8.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title small "><a href="/film-10">Prayer for the Devil</a></h3>
        <a href="/film-10" type="button" className="btn btn-light card-btn">Buy Ticket</a>  
    </div>
    <div className="card action cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-11.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title"><a href="/film-11">Halloween</a></h3>
        <a href="/film-11" type="button" className="btn btn-light card-btn">Buy Ticket</a>
    </div>
    <div className="card family cards">
        <div className="img-wrapper">
            <img className="cards-img" src="/public/assets/img/card/card-img-12.jpeg" alt="film"/>
            <a href="https://youtu.be/E3lBAjT-ftE" type="button" className="btn btn-light card-img-btn">Trailer</a>
        </div>
        <h3 className="cards-title"><a href="/film-12">Cartoon</a></h3>
         <a href="/film-12" type="button" className="btn btn-light card-btn">Buy Ticket</a>   
    </div>
  </div>
</div>
    </>
}

module.exports = ArticleList;
