import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Login from './components/contents/Login'
import Menu from './components/contents/Menu';
// import ProtectedRoute from "./routes/ProtectedRoute";

class Main extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/menu">
                        <Menu />
                    </Route>
                    <Route exact path="/">
                        <Redirect exact from="/" to="login" />
                    </Route>
                    <Route path="*">
                        <Redirect from="/" to="menu" />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Main;
