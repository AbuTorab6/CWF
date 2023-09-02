import React,{Fragment} from 'react';

import mission from '../asset/image/mission.jpg'

const ExplorePark = () => {
    return (
        <Fragment>
            <section className='explorePark-section'>
                <div className='row'>
                    <h2>Explore Our Park</h2>
                    <div className='explorePark-grid'>
                        <div className='col'>
                            <div className='explorePark-image'> <img  className='explorePark-img' src={mission} alt=""/> </div>
                            <h3>Habitats</h3>
                            <p>Journey through our park and explore diverse habitats that replicate the natural environments of crocodiles from around the world.</p>
                        </div>
                        <div className='col'>
                            <div className='explorePark-image'> <img  className='explorePark-img' src={mission} alt=""/> </div>
                            <h3>Educational Exhibits</h3>
                            <p>Learn about the fascinating behaviors, adaptations, and conservation efforts related to these ancient predators through engaging and informative exhibition centre.</p>
                        </div>
                        <div className='col'>
                            <div className='explorePark-image'> <img  className='explorePark-img' src={mission} alt=""/> </div>
                            <h3>Thrilling Encounters</h3>
                            <p>Get up close and personal with our magnificent crocodiles, observing their power and beauty firsthand.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default ExplorePark;