import React from 'react';
import { Link } from 'react-router-dom';


function OpenAccount() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='mt-3'>Modern platforms and apps ,<i class="fa fa-inr" aria-hidden="true"></i>0 investments, and flat <i class="fa fa-inr" aria-hidden="true"></i>20 intraday and F&Q trades. </p>
             <Link to="/Signup"> <button  className='p-2 btn btn-primary  fs-5 mb-5' style={{width:"17%", margin:"0 auto"}}> Signup Now</button> </Link>   
            </div>

        </div>
     );
}

export default OpenAccount;