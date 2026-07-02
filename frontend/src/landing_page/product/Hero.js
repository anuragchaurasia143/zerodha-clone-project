import React from 'react';


function Hero() {
    return ( 
       <div className='container border-bottom mb-5'>
        <div className='row text-center p-3 mt-5'>
            <h1>Technology</h1>
            <h4 className='text-muted mt-3'> Sleek, modern and intutive trading plateform</h4>
            <p className='mt-2 mb-5'> Check out our <a href="/" style={{textDecoration:"none"}}>investment offering <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
       </div>
     );
}

export default Hero;