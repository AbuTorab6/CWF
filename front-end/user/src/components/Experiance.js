import React,{Fragment} from 'react';


import experianceImg1 from '../asset/image/experianceImg1.png'
import experianceImg2 from '../asset/image/experianceImg2.png'
import experianceImg3 from '../asset/image/experianceImg3.png'

const Experiance = () => {
    return (
        <Fragment>
            <section className='experiance-section'>
                <div className='row'>
                    <h2>Experience the Crocodile World</h2>
                    <div className='experiance-grid'> 
                        <div className='col'>
                            <div className='experiance-image'> <img  className='experiance-img' src={experianceImg1} alt=""/>  </div>
                            <div className='overlay'></div>
                            <p><button>The Encounter</button></p>
                        </div>
                        <div className='col'>
                            <div className='experiance-image'> <img  className='experiance-img' src={experianceImg2} alt=""/>  </div>
                            <div className='overlay'></div>
                            <p><button>Buy Our Products</button></p>
                        </div>
                        <div className='col'>
                            <div className='experiance-image'> <img  className='experiance-img' src={experianceImg3} alt=""/>  </div>
                            <div className='overlay'></div>
                            <p><button>Stay with us</button></p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Experiance;