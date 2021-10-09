import '../../../assets/css/sb-admin-2.min.css';
import './Main.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from '../../navigation/NavBar/NavBar';
import SideBar from '../../navigation/SideBar/SideBar';
import Footer from '../../navigation/Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import Ticketing from '../Ticketing/Ticketing';

function Main() {
    return (
        <body id="page-top">
            <div id="wrapper">
                <Router>
                    <SideBar />
                    <div id="content">
                        <NavBar />
                        <Switch>
                            <Route path="/home">
                                <Dashboard/>
                            </Route>
                            <Route path="/ticketing">
                                <Ticketing/>
                            </Route>                
                        </Switch>   
                        <Footer />
                    </div>
                </Router> 
            </div>
        </body>
    );
}

export default Main;
