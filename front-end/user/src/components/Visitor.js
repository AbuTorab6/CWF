import React from 'react';

import Slide from 'react-reveal/Slide';

import mission from '../asset/image/mission.jpg'

const Visitor = () => {
    return (
        <div>
            <section className='visitor-section'>
                <div className='row'>
                    <div className='visitor-des'>
                        <Slide bottom><p>We want your visit to the Crocodile Wildlife Park to be as enjoyable and comfortable as possible. Our visitor's facilities are designed to enhance your experience and cater to your needs, ensuring a memorable day spent exploring the captivating world of crocodiles.</p>
                        </Slide>
                    </div>
                    <h2>Our Visitor's Facilities</h2>
                    <div className='visitor-grid'>
                        <div className='col'>
                            <div className='visitor-image'> <img  className='visitor-img' src={mission} alt="factoryInfo"/> </div>
                            <h3>Welcome Center</h3>
                            <p>Upon arrival, our modern and welcoming Welcome Center is your starting point for an incredible day at the Crocodile Wildlife Park. Here, you can find friendly staff ready to assist you with ticketing, provide information about the park, and answer any questions you may have.</p>
                        </div>
                        <div className='col'>
                            <div className='visitor-image'> <img  className='visitor-img' src={mission} alt="factoryInfo"/> </div>
                            <h3>Cafes and Restaurants</h3>
                            <p>Take a break from your wildlife adventure and indulge in delicious refreshments at our cafes and restaurants. Enjoy a range of culinary delights, from quick bites to full meals, all prepared with quality ingredients and offering various options to suit different tastes and dietary preferences.</p>
                        </div>
                        <div className='col'>
                            <div className='visitor-image'> <img  className='visitor-img' src={mission} alt="factoryInfo"/> </div>
                            <h3>Gift Shop</h3>
                            <p>Commemorate your visit and take home a piece of the Crocodile Wildlife Park experience by exploring our well-stocked gift shop. Discover a wide array of souvenirs, including plush toys, apparel, books, and unique crocodile-themed items, making for perfect mementos or gifts for loved ones.</p>
                        </div>
                        <div className='col'>
                            <div className='visitor-image'> <img  className='visitor-img' src={mission} alt="factoryInfo"/> </div>
                            <h3>Picnic Areas</h3>
                            <p>For those who prefer to savor the natural surroundings and have a leisurely picnic, we provide designated picnic areas within the park. Relax and enjoy a meal amidst the beauty of our landscape, surrounded by lush greenery and the sounds of nature.</p>
                        </div>
                        <div className='col'>
                            <div className='visitor-image'> <img  className='visitor-img' src={mission} alt="factoryInfo"/> </div>
                            <h3>Restrooms and Baby Changing Facilities</h3>
                            <p>We understand the importance of comfort and convenience during your visit. Our park features clean and well-maintained restrooms equipped with modern facilities. Additionally, we provide dedicated baby changing facilities to cater to the needs of families with young children.</p>
                        </div>
                        <div className='col'>
                            <div className='visitor-image'> <img  className='visitor-img' src={mission} alt="factoryInfo"/> </div>
                            <h3>Accessibility</h3>
                            <p>We strive to ensure that our park is accessible to all visitors. Wheelchair ramps, designated parking spaces, and accessible pathways are available to accommodate individuals with mobility challenges. If you have any specific accessibility requirements, please feel free to contact our staff for assistance.</p>
                        </div>
                        <div className='col'>
                            <div className='visitor-image'> <img  className='visitor-img' src={mission} alt="factoryInfo"/> </div>
                            <h3>Parking</h3>
                            <p>Convenient parking facilities are available on-site, offering ample space for your vehicles. Our parking area is well-maintained and designed with your comfort and security in mind, providing you with peace of mind as you enjoy your visit.</p>
                        </div>
                        <div className='col'>
                            <div className='visitor-image'> <img  className='visitor-img' src={mission} alt="factoryInfo"/> </div>
                            <h3>First Aid </h3>
                            <p>The safety and well-being of our visitors are of utmost importance to us. In the event of any minor injuries or medical concerns, our park is equipped with a first aid station staffed by trained professionals. Rest assured that we are prepared to provide immediate assistance when needed.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Visitor;