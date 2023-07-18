const React = require("react");

const {Route, Switch} = require("react-router");
const Header = require("./common/Header.jsx");
const Footer = require("./common/Footer.jsx");
const MainView = require("./main/MainView.jsx");
const SearchView = require("./search/SearchView.jsx");
const Login2 = require("./auth/Login2.jsx");
const Cinemas = require("./info/Cinemas.jsx");
const Program = require("./info/Program.jsx");
const About = require("./info/About.jsx");
const Terms = require("./info/Terms.jsx");
const Contacts = require("./info/Contacts.jsx");
const Politic = require("./info/Politic.jsx");
const Advesting = require("./info/Advesting.jsx");
const Film1 = require("./search/films/Film1.jsx");
const Film2 = require("./search/films/Film2.jsx");
const Film3 = require("./search/films/Film3.jsx");
const Film4 = require("./search/films/Film4.jsx");
const Film5 = require("./search/films/Film5.jsx");
const Film6 = require("./search/films/Film6.jsx");
const Film7 = require("./search/films/Film7.jsx");
const Film8 = require("./search/films/Film8.jsx");
const Film9 = require("./search/films/Film9.jsx");
const Film10 = require("./search/films/Film10.jsx");
const Film11 = require("./search/films/Film11.jsx");
const Film12 = require("./search/films/Film12.jsx");
const Hall = require("./info/Hall.jsx");
const Login = require("./info/Login.jsx");





const AppView = () => {


    return <>
         <Header/>
        <Switch>
            <Route exact path="/" component={MainView}/>
            <Route path="/cinemas" component={Cinemas}/>
            <Route path="/program" component={Program}/>
            <Route path="/about" component={About}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/politic" component={Politic}/>
            <Route path="/advesting" component={Advesting}/>
             <Route path="/film-1" component={Film1}/>
             <Route path="/film-2" component={Film2}/>
             <Route path="/film-3" component={Film3}/>
             <Route path="/film-4" component={Film4}/>
             <Route path="/film-5" component={Film5}/>
             <Route path="/film-6" component={Film6}/>
             <Route path="/film-7" component={Film7}/>
             <Route path="/film-8" component={Film8}/>
             <Route path="/film-9" component={Film9}/>
             <Route path="/film-10" component={Film10}/>
             <Route path="/film-11" component={Film11}/>
             <Route path="/film-12" component={Film12}/>
             <Route path="/hall" component={Hall}/>
             <Route path="/login" component={Login}/>
             
           

        </Switch>
       <Footer/>
    </>;

}


module.exports = AppView;