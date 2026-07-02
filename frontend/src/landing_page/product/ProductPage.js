import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultre flagship trading plateform with steaming market data, advanced charts, an elegant, UI and more. Enjoy the kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insite into your trades and investments with in-depth reports and visualisation."
        learnMore=""
        imageURL="media/images/console.png"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a stratup, build your investment app and showcase it to our clientbase."
        learnMore=""
        imageURL="media/images/kiteconnect.png"
       />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to graps,collection of stocks, market lessons with in depth coverage and illustration. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center">
        Want to know more about technology stack? Check out the Zerodha.tech blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductPage;
