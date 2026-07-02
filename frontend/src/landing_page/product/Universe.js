import React from "react";


function Universe() {
  return (
    <div className="container">
      <div className="row p-5"  style={{marginLeft:"90px"}}>
        <h1 className="mt-5 text-center">The Zerodha Universe</h1>
        <p className="mt-4 text-center">
          Extend your trading and investment experience even further with our
          partner plateforms
        </p>
        
        <div className="col-4 p-5 mt-4" >
            <img src="media/images/smallcaseLogo.png" alt="logo"/>
            <p className="text-small text-muted mt-2">Thematic investment plateform</p>
        </div>
        <div className="col-4 p-5 mt-4" >
            <img src="media/images/streakLogo.png" alt="logo" style={{width:"40%"}}/>
            <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-5 mt-4">
            <img src="media/images/sensibullLogo.svg" alt="logo" style={{width:"50%"}}/>
            <p className="text-small text-muted mt-4">Option trading plateform</p>
        </div>
        <div className="col-4 p-5 mt-4">
            <img src="media/images/zerodhaFundhouse.png" alt="logo" style={{width:"50%"}}/>
            <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-5 mt-4">
            <img src="media/images/goldenpiLogo.png" alt="logo" style={{width:"50%"}}/>
            <p className="text-small text-muted mt-2">Bonds trading plateform</p>
        </div>
        <div className="col-4 p-5 mt-4">
            <img src="media/images/dittoLogo.png" alt="logo" style={{width:"30%"}}/>
            <p className="text-small text-muted mt-">Insurence</p>
        </div>

      </div>
       <a  className='p-2 btn btn-primary fs-5 mb-5' style={{width:"17%", margin:"0 auto", marginLeft:"520px"}} href = "/signup"> Signup Now</a>
    </div>
  );
}

export default Universe;
