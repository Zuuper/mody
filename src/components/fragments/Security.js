import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Security extends React.Component {
    render() {
        return(
            <main className='card mt-4'> 
                <h1 className='card-title'>Security</h1>
                <button className='btn btn-primary rounded-pill btn-block mt-4 py-2' onClick={() => {toast.error("Wow so easy!")}}>
                    Change Password
                </button>
                
            </main>
        )
    }
}

export default Security