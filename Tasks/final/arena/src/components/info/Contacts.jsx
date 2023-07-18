const React = require("react");

const Contacts = () => {

    return <>
         <div className="terms-banner">
            <img src="../../../public/assets/img/contacts-banner.jpeg" alt="banner"/>
        </div>
        <div className="container">
            <h1>Contacts</h1>
            <div className="contacts-wrapper">
                <p>
                    Kino Arena The Mall
                    <br/>Sofia<br/> Address: 115 Tsarigradsko Shosse Blvd.<br/>Phone: 0898 460 557<br/>&nbsp;<br/>Kino Arena Deluxe<br/>Sofia<br/>Address: 69  Bulgaria Blvd., Bulgaria Mall Shopping Center<br/>Phone: 0898 480088&nbsp;<br/>&nbsp;<br/> Kino Arena Mall Varna  <br/>Varna Address:.  186 Varnenchik Str.  <br/>Phone: 052/578 742<br/>&nbsp;<br/>Kino Arena Grand Mall Varna<br/> Varna <br/> Address:. Acad. Andrei Sakharov Str. (central bus station) <br/> Phone: 0894 404 482 <br/><br/>&nbsp;<br/>Kino Arena Mall Markovo Tepe <br/>Plovdiv Ruski Blvd. 54 <br/> Phone: 0898 680 381 <br/>&nbsp;<br/>Kino Arena Panorama Mall Pleven<br/> Pleven <br/> Address: 1 Ivan Mindilikov Sqare <br/> Phone: 0894 388 139 <br/>
                </p>
                <a href="mailto:info@kinoarena.com">info@kinoarena.com</a> <br/>
                 <a href="mailto:marketing@kinoarena.com">marketing@kinoarena.com</a>
            </div>
        </div>



    </>
}

module.exports = Contacts;