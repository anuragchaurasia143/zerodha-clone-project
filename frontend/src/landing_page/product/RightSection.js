import React from 'react';


function RightSection({
   
    productName,
    productDescription,
    learnMore,
    imageURL,
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col mt-5 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore}>Learn More</a>
                </div>
                <div className='col'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;