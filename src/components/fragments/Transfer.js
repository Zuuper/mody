import React from 'react'
import TransferService from '../../Service/TransferService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Transfer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id_user_pengirim: props.userPengirim,
            id_user_penerima: '',
            jumlah_transaksi: '',
            keterangan: '',
            password: '',
        }
        this.changeUserPenerima = this.changeUserPenerima.bind(this)
        // this.changeUserPegnirim = this.changeUserPengirim.bind(this)
        this.changeJumlahTransaksi = this.changeJumlahTransaksi.bind(this)
        this.changeKeterangan = this.changeKeterangan.bind(this)
        this.changePassword = this.changePassword.bind(this)

        this.saveData = this.saveData.bind(this)
    }
    saveData(e) {
        e.preventDefault();
        let Data = {
            'id_user_pengirim' : this.props.userPengirim,
            'kode_dompet_penerima': this.state.id_user_penerima,
            'jumlah_transaksi': this.state.jumlah_transaksi,
            'keterangan': this.state.keterangan,
            'password': this.state.password,
        }
        console.log(this.props.userPengirim)
        console.log(Data)
        TransferService.create(Data).then(res => {
            toast.success('success transfer money')
            window.location.reload();
        }).catch(err => {
            toast.error(err.response.data.message)
        })
    }
    // changeUserPengirim(e){
    //     e.preventDefault();
    //     this.setState({ id_user_pengirim: e.target.value });
    // }
    changeUserPenerima(e){
        e.preventDefault();
        this.setState({ id_user_penerima: e.target.value });
    }
    changeJumlahTransaksi(e){
        e.preventDefault();
        this.setState({ jumlah_transaksi: e.target.value });
    }
    changeKeterangan(e){
        e.preventDefault();
        this.setState({ keterangan: e.target.value });
    }
    changePassword(e){
        e.preventDefault();
        this.setState({ password: e.target.value });
    }
    render() {
        return (
            <main>
                <form>
                    <input type="hidden" onChange={this.changeUserPengirim} value={this.props.userPengirim}/>
                    <div className="d-flex justify-content-between mt-4">
                        <div class="form-group">
                            <label for="TransferTo">Wallet ID</label>
                            <input type="telp" class="form-control rounded-pill form-custom-double" id="TransferTo" placeholder="input wallet id" onChange={this.changeUserPenerima} required
                                style={{ minWidth: '500px' }} />
                        </div>
                        <div class="form-group">
                            <label for="Amount">Amount</label>
                            <input type="number" class="form-control rounded-pill form-custom-double" id="Amount" placeholder="Input Nominal" onChange={this.changeJumlahTransaksi} required />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Description">Description</label>
                        <textarea class="form-control" id="Description" placeholder="insert text here" onChange={this.changeKeterangan} required/>
                    </div>
                    <div class="form-group">
                        <label for="Amount">Password Confirmation</label>
                        <input type="password" class="form-control rounded-pill form-custom-double" id="Password" placeholder="Input Password" onChange={this.changePassword} required />
                    </div>
                    <div class="mt-5">
                        <input type="submit" class="btn btn-primary rounded-pill btn-block mb-3 py-3" onClick={this.saveData} />
                    </div>
                </form>
            </main>
        )
    }
}

export default Transfer