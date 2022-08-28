import React from 'react'
import BankAccount from '../../assets/icons/account_balance.png'
import Wallet from '../../assets/icons/account_balance_wallet.png'
import Person from '../../assets/icons/person.png'
class Information extends React.Component {
    render() {
        return (
            <main className='card mt-4'>
                <h1 className='card-title'>Information</h1>
                <ul>
                    <li className='my-3'>
                        <section className='row'>
                            <span className='col-5'>
                                <img src={BankAccount} className="pr-3" alt="Gambar LPD"/>
                                    LPD Name
                                </span>
                            <span className='col-7'>
                                : {this.props.LpdName}
                            </span>
                        </section>
                    </li>
                    <li className='my-3'>
                        <section className='row'>
                            <span className='col-5'>
                                <img src={Wallet} className="pr-3" alt="Gambar Wallet"/>
                                    WalletID
                                </span>
                            <span className='col-7'>
                                : {this.props.WalletID}
                            </span>
                        </section>
                    </li>
                    <li className='my-3'>
                        <section className='row'>
                            <span className='col-5'>
                                <img src={Person} className="pr-3" alt="Gambar orang"/>
                                    Name
                                </span>
                            <span className='col-7'>
                                : {this.props.CustomerName}
                            </span>
                        </section>
                    </li>
                </ul>
            </main>
        )
    }
}

export default Information