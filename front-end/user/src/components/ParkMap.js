import React,{Fragment} from 'react';


import parkmap from '../asset/image/parkmap.png'

import Slide from 'react-reveal/Slide';

const ParkMap = () => {
    return (
        <Fragment>
            <section className='parkmap-section'>
                <div className='row'>
                    <h2>Park Map</h2>
                    {/* <div className='parkmap-image'>
                        <img  className='parkmap-img' src={parkmap} alt="parkMap"/>
                    </div> */}
                </div>
            </section>
        </Fragment>
    );
};

export default ParkMap;