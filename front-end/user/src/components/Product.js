import React,{Fragment} from 'react';

import Slide from 'react-reveal/Slide';

import productImg1 from '../asset/image/productImg1.jpg'
import productImg2 from '../asset/image/productImg2.jpg'

const Product = () => {
    return (
        <Fragment>
            <section className='product-section'>
                <div className='row'>
                    <h2>Our Products</h2>

                    <div className='product-grid'>
                        
                        <div className='col'>
                            <div className='des'>
                                <h3>Crocodile Skin</h3>
                                <Slide right><p>Our farm produces premium quality crocodile skin, renowned for its durability, unique texture, and striking appearance. Each crocodile skin is carefully sourced from our farm, where responsible farming practices are employed to ensure the welfare and quality of the skins. Skilled craftsmen meticulously process the skins, transforming them into luxurious leather used in the creation of exquisite items such as handbags, wallets, belts, and other fashion accessories.</p></Slide> 
                                <button className='planVisitBtn bookBtn'>Get a Quote</button>
                                <button className='planVisitBtn learnBtn'>Learn More</button>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='product-image'> <img  className='product-img' src={productImg1} alt=""/> </div>
                        </div>

                        {/* small screen */}
                        <div className='col small-screen small-screen-margin'>
                            <div className='des'>
                                <h3>Live Crocodile:</h3>
                                <Slide right><p>In addition to crocodile skin, we also offer the opportunity to acquire live crocodiles. Whether for educational purposes, scientific research, or conservation efforts, our live crocodiles are carefully nurtured in our farm's pristine habitats. </p></Slide> 
                                <button className='planVisitBtn bookBtn'>Get a Quote</button>
                                <button className='planVisitBtn learnBtn'>Learn More</button>
                            </div>
                        </div>
                        <div className='col small-screen'>
                            <div className='product-image'> <img  className='product-img' src={productImg2} alt=""/> </div>
                        </div>

                    
                        <div className='col big-screen'>
                            <div className='product-image'> <img  className='product-img' src={productImg2} alt=""/> </div>
                        </div>
                        <div className='col big-screen'>
                            <div className='des'>
                                <h3>Live Crocodile:</h3>
                                <Slide right><p>In addition to crocodile skin, we also offer the opportunity to acquire live crocodiles. Whether for educational purposes, scientific research, or conservation efforts, our live crocodiles are carefully nurtured in our farm's pristine habitats. </p></Slide> 
                                <button className='planVisitBtn bookBtn'>Get a Quote</button>
                                <button className='planVisitBtn learnBtn'>Learn More</button>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Product;