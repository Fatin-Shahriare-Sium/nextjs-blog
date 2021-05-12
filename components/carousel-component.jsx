import React from 'react'
const cheerio = require("cheerio");
const CarouselComponent = ({title,body,img,alt}) => {
    let truncateText=()=>{
        let text=cheerio.load(body).text()
        if(text.length>190){
            return text.substr(0,170)+'...'
        }else{
            return text
        }
        // console.log(text.length);
    }
    return (
        <div className='carousel-component'>
            <div className="carousel-component__img">
                    <img src={img} alt={alt} />
            </div>
            <div className="carousel-component__details">
                <div className="carousel-component__title">
                    <p>{title}</p>
                </div>
                <div className="carousel-component__body">
                    <p>{truncateText()}</p>
                </div>
            </div>
        </div>
    )
}

export default CarouselComponent;
