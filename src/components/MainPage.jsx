import React  from "react";



const MainPage = () => {
    return (
        <div className="main">
            <div className="w-apparel">
            <img src={process.env.PUBLIC_URL + '/images/w-apparel.jpg'} alt="Your Image" />
            </div>
            <div className="m-apparel">
                <img src={process.env.PUBLIC_URL + '/images/m-apparel.jpg'} alt="Your Image" />
            </div>
            <div className="k-apparel">
                <img src={process.env.PUBLIC_URL + '/images/k-apparel.jpg'} alt="Your Image" />
            </div>
            <div className="shoes">
                <img src={process.env.PUBLIC_URL + '/images/shoes.jpg'} alt="Your Image" />
            </div>
            <div className="accessories">
                <img src={process.env.PUBLIC_URL + '/images/accessories.jpg'} alt="your image" />
            </div>
        </div>
    );
}

export default MainPage;