import React,{Fragment} from 'react';

import navLogoScroll from '../asset/image/navLogoScroll.png';
import Selection from '../asset/image/Selection.png';
import Grading from '../asset/image/Grading.png';
import Pricing from '../asset/image/Pricing.png';
import Processing from '../asset/image/Processing.png';
import Packaging from '../asset/image/Packaging.png';
import Delivery from '../asset/image/Export-&-Delivery.png';

const Purchase = () => {
    return (
        <Fragment>
            <section className='purchase-section'>
                <div className='row'>
                    <h2>Process of Purchase</h2>
                    <div className='purchase-grid'>
                        <div className='col'>
                            <div className='purchase-image'> <img  className='purchase-img' src={Selection} alt=""/>  </div>
                            <h3>01</h3>
                            <p>Selection</p>
                        </div>
                        <div className='col'>
                            <div className='purchase-image'> <img  className='purchase-img' src={Grading} alt=""/>  </div>
                            <h3>02</h3>
                            <p>Grading</p>
                        </div>
                        <div className='col'>
                            <div className='purchase-image'> <img  className='purchase-img' src={Pricing} alt=""/>  </div>
                            <h3>03</h3>
                            <p>Pricing</p>
                        </div>
                        <div className='col'>
                            <div className='purchase-image'> <img  className='purchase-img' src={Processing} alt=""/>  </div>
                            <h3>04</h3>
                            <p>Processing</p>
                        </div>
                        <div className='col'>
                            <div className='purchase-image'> <img  className='purchase-img' src={Packaging} alt=""/>  </div>
                            <h3>05</h3>
                            <p>Packaging</p>
                        </div>
                        <div className='col'>
                            <div className='purchase-image'> <img  className='purchase-img' src={Delivery} alt=""/>  </div>
                            <h3>06</h3>
                            <p>Export & Delivery</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Purchase;