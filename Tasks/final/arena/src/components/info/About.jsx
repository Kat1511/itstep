const React = require("react");

const About = () => {

    return <>
        <div className="about-banner">
            <img src="../../../public/assets/img/about.jpeg" alt="about"/>
        </div>
       <div className="container">
        <h1>About us</h1>
        <div className="about-wrapper">
        <article class="about-content">
            <h6><strong>ABOUT US</strong></h6>
                <p><em>Hello Kino Arena friends! Welcome to our site!</em></p>
                <p><em>The Kino Arena site provides detailed information about all current and upcoming movies, about the curious events in the world of cinema and makes buying and booking cinema tickets quick and easy.</em></p>
                <p><em>The site has a special section for the video game fans.</em></p>
                <p><em>You can learn about our latest special offers and promotions and take a part in them.</em></p>
                <p><em>Immerse into the magic of cinema - we guarantee you a new dimension of movie experience.</em></p>
                <p><em>&nbsp;</em></p>
                <p><em>With respect: </em><a href="mailto:info@kinoarena.com"><em>the Kino Arena team</em></a></p>
                <h6>&nbsp;</h6>
                <h6>THE NEW DIMENSION OF MOVIE EXPERIENCE!</h6>
                <p>&nbsp;The largest chain of movie theaters in Bulgaria operates 7 cinemas with 45 screens in 5 cities.</p>
                <p>Every Kino Arena theater is equipped with the highest class of cinema technology, contemporary design, comfortable chairs and everything to satisfy even the most demanding viewer.</p>
                <p>Kino Arena offers special concepts for ultimate cinema experience such as IMAX, LUXE, PREMIUM and VIP. The most advanced cinema audio system Dolby Atmos, which offers 360-degrees panoramic sound, is presented in Bulgaria exclusively by Arena Cinemas.</p>
                <p>The digital cinema equipment allows the screening of alternative content /opera, ballet, concerts, sports/ including live screening via satellite.</p>
                <p>The Kino Arena movie theaters are a preferred venue for hosting events on national level. The big screens and the comfortable amphitheatrically designed halls attract customers from all lines of business with the unique possibilities for spectacular presentations.</p>
            </article>
        </div>
       </div>
    </>
}

module.exports = About;