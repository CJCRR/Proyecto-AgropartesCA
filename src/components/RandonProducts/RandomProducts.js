import React, { useState, useEffect } from 'react';
import { getSomeProducts } from '../../utils/firebaseFetching'
import Item from "../Item/Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const fetchRandomProducts = async () => {
            try {
                const products = await getSomeProducts();
                setRandomProducts(products);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRandomProducts();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        spaceBetween: 10,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            <h1>Productos Destacados</h1>
            <div>
                <Slider {...settings} className='ramdonProducts-1' >
                    {randomProducts.map((product) => (
                        <div className='ramdonProducts' >
                            <Item key={product.id} product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );

};


export default ProductSlider;