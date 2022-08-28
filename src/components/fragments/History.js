import React from 'react'
import HistoryService from '../../Service/History'

class DetailHistory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Data: [],
            DataUpdate: [],
            DataDetail : []
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        HistoryService.getAll().then((res)=>{
            this.setState({
                Data : res.data.data.reverse()
            })
            console.log(res.data.data)
        })
    }
    getDetail(data){
        HistoryService.getById(data).then((res)=>{
            console.log(res)
            this.setState({
                DataDetail : res.data.data
            })
        })
    }
    render(){
        return(
            <main>
<div class="modal fade" id="showHistory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">History</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    {this.state.Data.map((data,index) =>(
                            <div key={index}>
                                {data.id_user_pengirim == sessionStorage.user_id &&
                                    <div data-toggle="modal" data-target="#showDetail" onClick={this.getDetail.bind(this,data.id_transaksi)}>
                                    <section className="mx-3">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="card-history-title">to : {data.kode_dompet_penerima}</h4>
                                                <p className="card-history-type">Transfer to other wallet</p>
                                            </div>
                                            <div className="">
                                                <h4 className="card-history-title">{data.tanggal_transaksi}</h4>
                                                <p className="card-history-money text-right text-primary">- {data.jumlah_transaksi}</p>
                                            </div>     
                                        </div>
                                        <div>
                                            <h4 className="card-history-title">Description : </h4>
                                            <p className="card-history-money">{data.keterangan}</p>
                                        </div>      
                                    </section>
                                    <hr></hr> 
                                    </div>
                                }
                                {data.id_user_pengirim != sessionStorage.user_id &&
                                    <div data-toggle="modal" data-target="#showDetail" onClick={this.getDetail.bind(this,data.id_transaksi)}>
                                        <section className="mx-3">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="card-history-title">from : {data.kode_dompet_penerima}</h4>
                                                <p className="card-history-type">receive transfer</p>
                                            </div>
                                            <div>
                                                <h4 className="card-history-title">{data.tanggal_transaksi}</h4>
                                                <p className="card-history-money text-right text-success">+ {data.jumlah_transaksi}</p>
                                            </div>    
                                        </div>
                                        <div>
                                            <h4 className="card-history-title">Description : </h4>
                                            <p className="card-history-money">{data.keterangan}</p>
                                        </div>      
                                    </section>
                                    <hr></hr> 
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-link" data-dismiss="modal" >close</button>
                    </div>
                </div>
            </div>
        </div>
        <DetailTransaction data={this.state.DataDetail} />

            </main>
        )
    }
}

class DetailTransaction extends React.Component{
    render(){
        return(
            <div class="modal fade" id="showDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">History</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <div>
                                <section className="d-flex justify-content-center">
                                    <h2>Transaction Detail</h2>
                                </section>
                                <section>
                                    <div>
                                        <h6>Transfer By : </h6>
                                        <p>{this.props.data.id_user_pengirim}</p>
                                    </div>
                                    <div>
                                        <h6>Transfer To : </h6>
                                        <p>{this.props.data.kode_dompet_penerima}</p>
                                    </div>
                                    <div>
                                        <h6>Total : </h6>
                                        <p>{this.props.data.jumlah_transaksi}</p>
                                    </div>
                                    <div>
                                        <h6>Transcation Date : </h6>
                                        <p>{this.props.data.tanggal_transaksi}</p>
                                    </div>
                                </section>
                            </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-link" data-dismiss="modal" >close</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

class History extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            limit : 5,
            DataHistory: [],
            DataUpdate: [],
            DataDetail : []
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        HistoryService.getAll().then((res)=>{
            this.setState({
                DataHistory : res.data.data.reverse()
            })
        })
    }
    getDetail(data){
        HistoryService.getById(data).then((res)=>{
            console.log(res)
            this.setState({
                DataDetail : res.data.data
            })
        })
    }
    render() {
        return (
            <main className="card">
                <h1 className="card-title" style={{fontSize: '24px'}}>Recent Transaction</h1>
                <hr></hr> 
                <section className="mt-3"> 
                        {this.state.DataHistory.slice(0,5).map((data,index) =>(
                            <div key={index}>
                                {data.id_user_pengirim == sessionStorage.user_id &&
                                    <div data-toggle="modal" data-target="#showDetail" onClick={this.getDetail.bind(this,data.id_transaksi)}>
                                    <section className="d-flex justify-content-between mx-3">
                                        <div>
                                            <h4 className="card-history-title">to : {data.kode_dompet_penerima}</h4>
                                            <p className="card-history-type">Transfer to other wallet</p>
                                        </div>
                                        <div className="">
                                            <h4 className="card-history-title">{data.tanggal_transaksi}</h4>
                                            <p className="card-history-money text-right text-primary">- {data.jumlah_transaksi}</p>
                                        </div>           
                                    </section>
                                    <hr></hr> 
                                    </div>
                                }
                                {data.id_user_pengirim != sessionStorage.user_id &&
                                    <div data-toggle="modal" data-target="#showDetail" onClick={this.getDetail.bind(this,data.id_transaksi)}>
                                    <section className="d-flex justify-content-between mx-3">
                                        <div>
                                            <h4 className="card-history-title">from : {data.kode_dompet_penerima}</h4>
                                            <p className="card-history-type">receive transfer</p>
                                        </div>
                                        <div>
                                            <h4 className="card-history-title">{data.tanggal_transaksi}</h4>
                                            <p className="card-history-money text-right text-success">+ {data.jumlah_transaksi}</p>
                                        </div>           
                                    </section>
                                    <hr></hr> 
                                    </div>
                                }
                            </div>
                        ))}
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-link" data-toggle="modal" data-target="#showHistory">show all</button>
                    </div>
                </section>
                <DetailHistory/>
                <DetailTransaction data={this.state.DataDetail}/>
            </main>
        )
    }
}

export default History