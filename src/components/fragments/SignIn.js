import React from 'react'
import { Redirect } from "react-router-dom";
import SignInService from '../../Service/SignInService'
import { toast } from 'react-toastify';
// baru mau ngerubah, gtw password ma emailnya wkwk
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            loginParams: {
                email: '',
                password: ''
            }
        }
    }
    handleFormChange = event => {
        let LoginParamsNew = { ...this.state.loginParams }
        let val = event.target.value
        LoginParamsNew[event.target.name] = val
        this.setState({
            loginParams: LoginParamsNew
        })
    }
    login = event => {
        event.preventDefault()
        let email = this.state.loginParams.email
        let password = this.state.loginParams.password
        let data ={
            'email' : email,
            'password': password
        }
        SignInService.postData(data).then((res)=>{
            let access_token = "Bearer " + res.data.access_token
            
            if(access_token){
                sessionStorage.setItem('token',access_token)
                sessionStorage.setItem('username',res.data.user.username)
                sessionStorage.setItem('user_id',res.data.user.id)
                this.setState({
                    isLoggedIn: true
                })
                console.log(access_token)
                console.log(sessionStorage.getItem('token'))
                window.location.reload();
            }
        }).catch((err) => {
            toast.error(err.response.data.error)
        })
    }
    render() {
        if (sessionStorage.getItem('token')) {
            return <Redirect to="/menu" />
        }
        return (
            <main>
                <h3 className="text-uppercase text-center title-login">SIGN IN</h3>
                <form onSubmit={this.login}>
                    <div class="mt-5">
                        <div class="mb-3 pt-2">
                            <input
                                type="text"
                                class="form-control rounded-pill form-custom"
                                id="usernameInput"
                                placeholder="email"
                                name="email"
                                onChange={this.handleFormChange}
                                required
                            />
                        </div>
                        <div class="my-4">
                            <input
                                type="password"
                                class="form-control rounded-pill form-custom"
                                id="passwordInput"
                                placeholder="password"
                                onChange={this.handleFormChange}
                                name="password"
                                required
                            />
                        </div>
                    </div>
                    <div class="mt-5">
                        <input type="submit" class="btn btn-primary rounded-pill btn-block mb-3 py-3" value="login" />
                    </div>
                </form>
            </main>
        )
    }
}

export default SignIn