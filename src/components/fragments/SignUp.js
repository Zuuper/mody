import React from 'react'
import LpdService from '../../Service/LpdService'
import SignUpService from '../../Service/SignupService'
import { toast } from 'react-toastify';
class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            LPD: [],
            signUpParams: {
                name: '',
                email: '',
                username: '',
                password: '',
                password_confirmation: '',
                no_rekening: '',
                id_lpd: '',
            }
        }
    }
    componentDidMount() {
        LpdService.get().then((res)=>{
            this.setState({
                LPD : res.data.data
            })
            console.log(this.state.lPD)
        })
    }
    handleFormChange= e => {
        let signUpParamsNew = { ...this.state.signUpParams }
        let val = e.target.value
        signUpParamsNew[e.target.name] = val
        this.setState({
            signUpParams: signUpParamsNew
        })
    }
    SignUp = e =>{
        e.preventDefault()
        let data = {
            name :  this.state.signUpParams.name,
            email:  this.state.signUpParams.email,
            username:  this.state.signUpParams.username,
            password:  this.state.signUpParams.password,
            password_confirmation:  this.state.signUpParams.password_confirmation,
            no_rekening:  this.state.signUpParams.no_rekening,
            id_lpd:  this.state.signUpParams.id_lpd
        }
        SignUpService.postData(data).then((res)=>{
            toast.success('success register new user, please check your email :)')
        }).catch(err => {
            toast.error(err.response.data)
            toast.error(err.response.data.message)
        })
    }
    render() {
        return (
            <main>
                <h3 className="text-uppercase text-center title-login">SIGN UP</h3>
                <form onSubmit={this.SignUp}>
                    <div className="d-flex justify-content-between mt-5">
                        <select class="form-control rounded-pill form-custom-double" id="id_lpd" name='id_lpd' onChange={this.handleFormChange} placeholder="LPD Location" required>
                            <option value="">Select LPD</option>
                            {this.state.LPD.map((data, index) => (
                                <option value={data.id_lpd}>{data.nama_lpd}</option>
                            ))}
                        </select>
                        <span class="mx-4"></span>
                        <input
                            type="number"
                            class="form-control rounded-pill form-custom-double"
                            id="no_rekening"
                            placeholder="Account Number"
                            name="no_rekening"
                            onChange={this.handleFormChange} 
                            required
                        />
                    </div>
                    <div class="my-4">
                        <input
                            type="text"
                            class="form-control rounded-pill form-custom"
                            placeholder="name"
                            name="name"
                            onChange={this.handleFormChange}
                            required
                        />
                    </div>
                    <div class="my-4">
                        <input
                            type="email"
                            class="form-control rounded-pill form-custom"
                            placeholder="email"
                            name="email"
                            onChange={this.handleFormChange}
                            required
                        />
                    </div>
                    <div class="my-4">
                        <input
                            type="text"
                            class="form-control rounded-pill form-custom"
                            placeholder="username"
                            name="username"
                            onChange={this.handleFormChange}
                            required
                        />
                    </div>
                    <div class="my-4">
                        <input
                            type="password"
                            class="form-control rounded-pill form-custom"
                            placeholder="password"
                            name="password"
                            onChange={this.handleFormChange}
                            required
                        />
                    </div>
                    <div class="my-4">
                        <input
                            type="password"
                            class="form-control rounded-pill form-custom"
                            placeholder="password_confirmation"
                            name="password_confirmation"
                            onChange={this.handleFormChange}
                            required
                        />
                    </div>
                    <div class="mt-5">
                        <input type="submit" class="btn btn-primary rounded-pill btn-block mb-3 py-3" value="SignUp" />
                    </div>
                </form>
            </main>
        )
    }
}

export default SignUp