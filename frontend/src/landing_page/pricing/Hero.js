import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-4 fs-5">
          Free equality investments and flat{" "}
          <i class="fa fa-inr" aria-hidden="true"></i>20 traday and F&Q trades
        </h3>
      </div>
      <div className="row p-5">
        <div className="col-4 p-4 ">
          <img src="media/images/pricingEquity.svg" />
          <h2 className="text-center"> Free equity delivery </h2>
          <p className="text-center mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free- <i class="fa fa-inr" aria-hidden="true"></i> 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" />
          <h2 className="text-center">Intraday and F&Q trades</h2>
          <p className="text-center mt-3">
           Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currrency and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h2 className="text-center"> Free direct MF</h2>
          <p className="text-center mt-4">
            All direct mutual fund investments are absolutely free- <i class="fa fa-inr" aria-hidden="true"></i> 0 commission & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
