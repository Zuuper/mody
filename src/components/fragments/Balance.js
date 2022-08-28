import React from 'react'

class Balance extends React.Component {
    render() {
        return (
            <main className='card'>
                <h1 className='card-title'>Balance</h1>
                <p id='card-balance-body'>Rp. {this.props.BalanceDetail}</p>
            </main>
        )
    }
}

export default Balance