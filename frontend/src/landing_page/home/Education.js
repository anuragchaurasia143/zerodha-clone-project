import React from 'react';

function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/images/education.svg" alt="education.svg" style={{width:"70%"}}/>
                
                </div>
                <div className='col-6'>
                    <h1 className='mt-5 fs-2'>Free and open market education</h1>
                    <p className='mt-5'>Versity, the largest online stock market education book in the world cobering everything fron the basis to advanced trading .</p>
                   <a href="https://zerodha.com/varsity/" style={{textDecoration:"none"}}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                   <p className='mt-5'>TradingQ&A, the most active trading and investment community in the India for all youyr market related queries.</p>
                   <a href="https://tradingqna.com/" style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

            </div>
        </div>
     );
}

export default Education;