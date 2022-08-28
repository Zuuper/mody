import React from 'react';
import { Redirect } from "react-router-dom";
import Logo from '../../assets/icons/mody-icon.png'
import SignUp from '../fragments/SignUp'
import SignIn from '../fragments/SignIn'
import { Switch, Route, NavLink } from "react-router-dom"
import { withRouter } from "react-router";
import { ToastContainer} from 'react-toastify';
import '../../assets/css/login.css'

class Login extends React.Component {

    render() {

        const { match } = this.props;
        return (
            <main>
                {/* desktop Mode */}
                <section class="d-none d-md-block">
                    <div class="row">
                        <nav class="navbar navbar-expand-md fixed-top navbar-light bg-transparent px-5 mt-5 ">
                            <h1 className="navbar-brand title-app ">
                                <span>MO</span>
                                <span class="text-white">DY</span>
                            </h1>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav mr-auto">

                                </ul>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <NavLink exact className=" px-5 py-3 mr-3 text-black" activeClassName="active text-white rounded-pill" to={`${match.path}/sign-in`}>SIGN IN</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact className=" px-5 py-3 text-black" activeClassName="active text-white rounded-pill" to={`${match.path}/sign-up`}>SIGN UP</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="col d-flex justify-content-center align-items-center bg-primary vh-100">
                            <div className="">
                                <img src={Logo} className="rounded mx-auto d-block" alt="Mody Logo"></img>
                                <h3 className="text-center text-white">
                                    <span >save money</span> <br></br>
                                    <span >safely and easily</span> </h3>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center vh-100">
                            <Switch>
                                <Redirect exact from='/login' to='/login/sign-in' />
                                <Route path={`${match.path}/sign-up`}>
                                    <SignUp/>
                                </Route>                                
                                <Route path={`${match.path}/sign-in`}>
                                    <SignIn/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </section>

                {/* Mobile Mode */}
                <section class="d-block d-md-none">

                </section>
                <ToastContainer position="top-right" />  
            </main>
        )
    }
}

export default withRouter(Login);