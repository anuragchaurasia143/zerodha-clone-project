import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="suppportwrapper">
        <h5>Support Portal</h5>
        <a href="" style={{ color: "white" }}>
          {" "}
          Track Tickets
        </a>
      </div>
      <div className=" row p-5 m-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="mb-3" placeholder="Eg. how do i activate F&Q, why is my order getting rejected." />
          <br />
          <a href="" className="mx-2">Track account opening</a>
          <a href="" className="mx-2">Track segment activation</a>
          <a href="" className="mx-2">Intraday</a><br />
          <a href="" className="mx-2">margins </a>
          <a href="" className="mx-2">Kite user manual</a>
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol style={{lineHeight:"2"}}>
            <li><a href="">Current Takeovers and Delisting - January 2026</a></li>
           <li><a href="">Latest Intraday leverages - MIS & CO </a></li> 
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
