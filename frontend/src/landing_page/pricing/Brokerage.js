import React from 'react';


function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-4 border-top'>
                <div className='col-8'>
                   <a href="https://zerodha.com/brokerage-calculator#tab-equities" style={{textDecoration:"none"}}> <h4 className='text-center fs-5'>Brokerage calculator</h4></a>
                    <ul className='mt-4 text-muted' style={{ lineHeight:"2.5"}}>
                        <li>Call& Trade and RMS auto-squareoff: Additional charges of <i class="fa fa-inr" aria-hidden="true"></i>50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged <i class="fa fa-inr" aria-hidden="true"></i>20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or <i class="fa fa-inr" aria-hidden="true"></i>100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or <i class="fa fa-inr" aria-hidden="true"></i>200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged <i class="fa fa-inr" aria-hidden="true"></i>40 per executed order instead of <i class="fa fa-inr" aria-hidden="true"></i>20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                   <a href="/pricing" style={{textDecoration:"none"}}> <h4 className='text-center fs-5'> List of charges</h4>
   </a>             </div>
            </div>
        </div>
     );
}

export default Brokerage;