import React,{Fragment} from 'react';

import mission from '../asset/image/mission.jpg'

import Slide from 'react-reveal/Slide';

const BookYourAdvance = () => {
    return (
        <Fragment>
            <section className='mission-section'>
                <h2>Book Your Adventure</h2>
                <div className='row'> 
                    <div className='mission-grid'>
                        <div>
                            <div className='mission-image'> <img  className='mission-img' src={mission} alt="missionPhoto"/> </div>
                        </div>
                        <div className='mission-des'>
                            <Slide right><p><b>Tickets:</b> Secure your place for an extraordinary journey into the wild by booking your tickets online.</p></Slide> <br/>
                            <Slide left><p><b>Plan Your Visit: </b> Find information on park hours, directions, and amenities to ensure a seamless and enjoyable visit.</p></Slide> 
                            <Slide left></Slide>

                            <Slide right><p>Join Us on an Unforgettable Adventure.</p></Slide> <br/>
                            <Slide left><p>Experience the wonder and majesty of crocodiles in a safe and educational environment. Book your tickets today and embark on an extraordinary adventure at our Crocodile Wildlife Park!.</p></Slide> 
                            <Slide left></Slide>
                        </div>
                    </div>

                </div>
            </section>
        </Fragment>
    );
};

export default BookYourAdvance;