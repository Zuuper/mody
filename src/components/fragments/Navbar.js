import React from 'react'
import NotificationNone from '../../assets/icons/notifications_none.png'
import { Redirect } from "react-router-dom";
// import NotificationTrue from '../../assets/icons/notification_true.svg'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleHeader: 'Title',
            username: sessionStorage.username,
            isLoggedOut: false
        }
    }
    signOut = () => {
        sessionStorage.removeItem("token");
        this.setState({
            isLoggedOut: true
        });
    };
    render() {
        if (this.state.isLoggedOut) {
            return <Redirect to="/login" />;
        }
        return (
            <nav class="navbar navbar-expand-md navbar-light bg-transparent pt-5 px-0">
                <h1 className="navbar-brand title-app ">
                    <span>MO</span>
                    <span class="text-primary">DY</span>
                </h1>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <ul class="navbar-nav d-flex align-items-center">
                        <li class="nav-item mx-4">
                            <img src={NotificationNone} width="18px" height="18px" alt="Notification"></img>
                        </li>
                        <li class="nav-item">
                            {/* <button class="btn btn-link text-dark">
                                Hello, {this.state.username}
                            </button> */}
                            <div class="dropdown">
                                <p
                                    class="dropdown-toggle btn btn-link text-dark m-0"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Hello, {this.state.username}
                                </p>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button class="dropdown-item" onClick={this.signOut} >Log out</button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar