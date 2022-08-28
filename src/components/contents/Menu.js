import React from 'react'
import Navbar from '../fragments/Navbar'
import Balance from '../fragments/Balance'
import Information from '../fragments/Information'
import Security from '../fragments/Security'
import Topup from '../fragments/Topup'
import Transfer from '../fragments/Transfer'
import History from '../fragments/History'
import UserService from '../../Service/UserService'
import LpdService from '../../Service/LpdService'
import DompetService from '../../Service/DompetService'
import '../../assets/css/menu.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Data: [],
            LPD : [],
            Dompet : []
        }
    }
    componentDidMount() {
        UserService.getById(sessionStorage.getItem('user_id')).then((res) => {
            this.setState({ Data: res.data.data});
            LpdService.getById(this.state.Data.id_lpd).then((value) =>{
                this.setState({LPD: value.data.data})
            })
            DompetService.getById(this.state.Data.id_dompet).then((res)=>
                this.setState({Dompet : res.data.data})
            )
        });
    }
    
    render() {
        return (
            <main style={{ backgroundColor: '#F3F3F3' }} className="vh-100">
                {/* desktop Mode */}
                <section class="d-none d-md-block">
                    <div class="container-fluid px-5">
                        <Navbar Username="Aditya" />
                        <div class="mt-5">
                            <h1 id="title-menu" class="text-uppercase mb-5">
                                <span class="text-primary text-uppercase text-primary">in</span>
                                <span class="text-primary text-uppercase text-dark">sign</span>
                            </h1>
                            <div class="row">
                                <div class="col-3">
                                    <Balance BalanceDetail={this.state.Dompet.saldo_dompet} />
                                    <Information LpdName={this.state.LPD.nama_lpd} WalletID={this.state.Dompet.kode_dompet} CustomerName={this.state.Data.name} />
                                    {/* <Security/> */}
                                </div>
                                <div class="col-6">
                                    <div class="card d-flex justify-content-center px-5">
                                        <h1 class="card-title-transaction text-center mb-5">Transaction</h1>
                                        <div class="d-flex justify-content-center card-transaction-nav rounded-pill mx-4    ">
                                            <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link py-4 active rounded-pill" id="pills-home-tab" data-toggle="pill" href="#transaction" role="tab" aria-controls="pills-home" aria-selected="true">Transaction</a>
                                                </li>
                                                <li class="nav-item " role="presentation">
                                                    <a class="nav-link py-4 rounded-pill" id="pills-profile-tab" data-toggle="pill" href="#topup" role="tab" aria-controls="pills-profile" aria-selected="false">TopUp</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content mt-5 mx-5" id="myTabContent">
                                            <div class="tab-pane fade show active" id="transaction" role="tabpanel" aria-labelledby="home-tab">
                                                <Transfer userPengirim={this.state.Data.id}/>
                                            </div>
                                            <div class="tab-pane fade" id="topup" role="tabpanel" aria-labelledby="profile-tab">
                                                <Topup /></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <History />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer position="top-right" />  
                </section>

                {/* Mobile Mode */}
                <section class="d-block d-md-none">

                </section>
            </main>
        )
    }
}

export default Menu