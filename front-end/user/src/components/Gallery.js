import React,{Fragment} from 'react';

import crocodile1 from '../asset/image/crocodile1.jpg'
import crocodile2 from '../asset/image/crocodile2.jpg'
import crocodile3 from '../asset/image/crocodile3.jpg'
import crocodile4 from '../asset/image/crocodile4.jpg'
import crocodile5 from '../asset/image/crocodile5.jfif'
import crocodile6 from '../asset/image/crocodile6.jfif'

import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

const Gallery = () => {
    return (
        <Fragment>
            <section className='gallery-section'>
                <div className='row'>
                    <h2>gallery</h2>

                    
                    <SlideshowLightbox  className='gallery-grid'>
                    
                        <img className='gallery-img' src={crocodile1} />
                        <img className='gallery-img' src={crocodile2} />  
                        <img className='gallery-img' src={crocodile3} />
                        <img className='gallery-img' src={crocodile4} />
                        <img className='gallery-img' src={crocodile5} />
                        <img className='gallery-img' src={crocodile6} />
                    
                    </SlideshowLightbox>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default Gallery;