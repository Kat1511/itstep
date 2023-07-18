const React = require("react");

const Cinemas = () => {

    return <>
      <div className="container">
        <div className="cinemas-wrapper">
            <h1>Cinemas</h1>
            <h2 className="cinemas-title">CHOOSE A CINEMA</h2>
            <div className="cinemas-items">
                <div className="cinemas-item">
                    <a href="/program">
                      <img src="../../../public/assets/img/arena1.jpeg" alt="arena1" />
                    <h5 class="cinemas-name">Kino Arena The Mall</h5>
                    <p>Sofia, 115 Tsarigradsko Shosse Blvd.</p>
                    <a href="tel:+0898460557" >Phone: 0898 460 557</a>  
                    </a>
                    
                </div>
                <a href="/program">
                    <div className="cinemas-item">
                    <img src="../../../public/assets/img/arena2.jpeg" alt="arena2" />
                    <h5 class="cinemas-name">Kino Arena Deluxe</h5>
                    <p>Sofia, 69  Bulgaria Blvd., Bulgaria Mall Shopping Center</p>
                    <a href="tel:+0898460557" >Phone: 0898 460 557</a>
                </div>
                </a>
                 <div className="cinemas-item">
                    <a href="/program">
                        <img src="../../../public/assets/img/arena3.jpeg" alt="arena3" />
                    <h5 class="cinemas-name">Kino Arena Garden</h5>
                    <p>Varna, 2 Andrey Saharov Str</p>
                    <a href="tel:+0898460557" >Phone: 0898 460 557</a>
                    </a>
                    
                </div>
            </div>
        </div>
      </div>
    </>
}

module.exports = Cinemas;