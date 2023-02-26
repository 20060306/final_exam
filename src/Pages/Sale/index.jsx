import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import './style.scss';
function index() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories/1/products').then((data) => data.json()).then((res) => setState(res))

    }, [])
    console.log(state)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div className="sliders_page">
                <div className="sale">
                    <h2>%20 Sale</h2>
                </div>
                <div className="cards">
                    <Slider {...settings}>
                        {
                            state.map((e) => {
                                console.log(e)
                                return (
                                    <div key={e.id} className="sliders">
                                        <img className='sliders-img' src={e.images} alt="" />
                                        <div className="sliders__body">
                                            <h2 className="sliders_price">
                                               $ {e.price}
                                            </h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default index