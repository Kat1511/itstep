const React = require("react");
const connect = require("react-redux").connect;

const Header = (props) => {

    return     <header className="header row">
        <div className="container">
            <nav className="nav">
                <ul className="nav-img" >
                    <li><a href="#">
                        <img src="/public/assets/img/logo/imax-tr.png" className="defaultImg" alt="imax"/>
                    </a></li>
                    <li><img src="/public/assets/img/logo/luxe.png" className="defaultImg" alt="luxe"/></li>
                    <li><img src="/public/assets/img/logo/premium.png" className="defaultImg" alt="premium"/></li>
                </ul>
                <div className="nav-logo">
                    <a href="/"><img src="/public/assets/img/logo/logo.png" alt="logo"/></a>
                </div>
                <ul className="nav-menu">
                    <li>
                
                        <a href="/cinemas">CINEMA</a>
                       
                    </li>
                    <li><a href="/program">PROGRAM</a></li>
                    <li><a href="/login">LOGIN</a></li>
                </ul>
            </nav>
        </div>
    </header>
}

const mapStateToProps = state => {
    return {
        login: state.user.currentUser
    }
};


module.exports = connect(mapStateToProps, null)(Header);



{/* <div classNameName="header">
        <nav classNameName="navigation">
            <div classNameName="container">
                <div classNameName="row justify-content-between">
                    <div id="toggle-menu" classNameName="col-1 toggle-menu">
                        <img src="/public/assets/img/header/menu.png" />
                    </div>
                    <div classNameName=" col-6 menu ">
                        <ul>
                            <li><a href=" " classNameName="active">Главная</a></li>
                            <li><a href=" ">Поиск</a></li>
                            <li><a href=" ">Журналы</a></li>
                            <li><a href=" ">Новости</a></li>
                            <li><a href=" ">Публикации</a></li>
                        </ul>
                    </div>

                    <div classNameName="col-1 offset-2 col-md-1 offset-md-6 col-lg-2 offset-lg-1 menu-entry ">
                        {(props.login == "") && <>
                                <a href=" " classNameName="registration ">Регистрация</a>
                                <a href=" " classNameName="signin ">Вход</a>
                            </>
                        }
                        {(props.login != "") && <>
                                    <div>{props.login}</div>
                            </>
                        }
                    </div>
                    <div classNameName="col-3 col-md-1 lang-switcher ">
                        <ul classNameName="link ">
                            <li classNameName="ru ">
                                <a href=" ">RU </a>
                            </li>
                            <li classNameName="delimetr ">|</li>
                            <li classNameName="en ">
                                <a href=" ">EN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>; */}