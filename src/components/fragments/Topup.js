import React from 'react'
import UserService from '../../Service/UserService'
import TopupService from '../../Service/TopUpService'
import { toast} from 'react-toastify';
class TopUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user : [],
            topupParams: {
                jumlah_topup: '',
            }
        }
    }
    handleFormChange = e =>{
        let topupParamsNew = { ...this.state.topupParams }
        let val = e.target.value
        topupParamsNew[e.target.name] = val
        this.setState({
            topupParams: topupParamsNew
        })
    }
    componentDidMount(){
        UserService.getById(sessionStorage.user_id).then((res)=>{
            this.setState({
                user: res.data.data
            })
            console.log(this.state.user)
        })
    }
    topup = e => {
        e.preventDefault()
        let data = {
            'id_user' : this.state.user.id,
            'no_rekening' : this.state.user.no_rekening,
            'id_lpd': this.state.user.id_lpd,
            'jumlah_topup' : this.state.topupParams.jumlah_topup
        }
        TopupService.postData(data).then(res =>{
            toast.success('topup still on proccess., please wait a momment and try to refresh page')
        }).catch(err =>{
            toast.error(err.response.data.message)
        })

    }
    render() {
        return (
            <main>
                <form className="mt-4" onSubmit={this.topup}>
                    <div class="form-group">
                        <label for="Amount">Amount</label>
                        <input type="number" 
                                class="form-control rounded-pill form-custom-double" 
                                id="jumlah_topup"
                                placeholder="amount"
                                onChange={this.handleFormChange}
                                name="jumlah_topup"
                                required/>
                    </div>
                    <div class="form-group">
                        <label for="Description">Description</label>
                        <textarea class="form-control" id="Description" placeholder="insert text here"/>
                    </div>
                    <div class="mt-5">
                        <input type="submit" class="btn btn-primary rounded-pill btn-block mb-3 py-3" value="topup" />
                    </div>
                </form>
            </main>
        )
    }
}

export default TopUp