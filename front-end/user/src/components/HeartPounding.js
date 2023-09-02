import React,{Fragment} from 'react';


import mission from '../asset/image/mission.jpg'

const HeartPounding = () => {
    return (
        <Fragment>
            <section className='heartPounding-section'>
                <div className='row'>
                    <h2>Heart-Pounding Experiences</h2>
                    <div className='heartPounding-grid'>
                        <div className='col'>
                            <div className='heartPounding-image'> <img  className='heartPounding-img' src={mission} alt=""/> </div>
                            <h3>Expert Guides</h3>
                            <p>Our passionate guides are ready to share their knowledge, answering your questions and revealing the secrets of these prehistoric survivors.</p>
                        </div>
                        <div className='col'>
                            <div className='heartPounding-image'> <img  className='heartPounding-img' src={mission} alt=""/> </div>
                            <h3>Crocodile Feeding</h3>
                            <p>Witness the lightning-fast strikes and powerful jaws of crocodiles as you participate in feeding sessions.</p>
                        </div>
                        <div className='col'>
                            <div className='heartPounding-image'> <img  className='heartPounding-img' src={mission} alt=""/> </div>
                            <h3>Educational Shows</h3>
                            <p>Experience captivating shows that showcase the agility and strength of these incredible creatures, leaving you in awe.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default HeartPounding;