import React,{Fragment} from 'react';

import ourPark1 from '../asset/image/ourPark1.jpg'
import ourPark2 from '../asset/image/ourPark2.jpg'
import ourPark3 from '../asset/image/ourPark3.jpg'
import ourPark4 from '../asset/image/ourPark4.png'
import ourPark5 from '../asset/image/ourPark5.png'
import ourPark6 from '../asset/image/ourPark6.png'


const OurFarm = () => {
    return (
        <Fragment>
            <section className='ourFarm-section'>
                <div className='row'>
                    <h2>Our Farm</h2>
                    {/* <h3>Breeding and Rearing Process </h3> */}
                    <div className='ourFarm-grid'>
                        <div className='col'>
                            <div className='ourFarm-image'> <img  className='ourFarm-img' src={ourPark1} alt=""/>  </div>
                            <div className='overlay'></div>
                            <h4>1. Breeding Season:</h4>
                            <p>The crocodile farming process begins with the breeding season, during which carefully selected crocodile pairs are brought together for mating. This stage involves closely monitoring the reproductive behavior of the crocodiles and ensuring optimal conditions for successful mating.</p>
                        </div>
                        <div className='col'>
                            <div className='ourFarm-image'> <img  className='ourFarm-img' src={ourPark2} alt=""/> </div>
                            <div className='overlay'></div>
                            <h4>2. Incubation:</h4>
                            <p>After successful mating, the female crocodile lays her eggs in a specially designed incubation area. The eggs are carefully collected and placed in temperature-controlled environments to mimic the natural incubation conditions. The eggs are monitored closely during this stage to ensure proper development.</p>
                        </div>
                        <div className='col'>
                            <div className='ourFarm-image'> <img  className='ourFarm-img' src={ourPark3} alt=""/> </div>
                            <div className='overlay'></div>
                            <h4>3. Hatching:</h4>
                            <p>Once the incubation period is complete, the crocodile eggs begin to hatch. The newborn crocodiles, known as hatchlings, emerge from their eggs. Hatchlings are fragile and require special care during this stage to ensure their survival.</p>
                        </div>
                        <div className='col'>
                            <div className='ourFarm-image'> <img  className='ourFarm-img' src={ourPark4} alt=""/> </div>
                            <div className='overlay'></div>
                            <h4>4. Nursery:</h4>
                            <p>The hatchlings are then moved to the nursery, a protected and controlled environment where they receive appropriate nutrition, housing, and care. This stage is crucial for the healthy growth and development of the crocodiles. Expert caretakers closely monitor the hatchlings, providing them with a conducive environment for their well-being.</p>
                        </div>
                        <div className='col'>
                            <div className='ourFarm-image'> <img  className='ourFarm-img' src={ourPark5} alt=""/> </div>
                            <div className='overlay'></div>
                            <h4>5. Skin Grading:</h4>
                            <p>As the crocodiles grow, their skin develops distinct patterns and characteristics. Skin grading is a meticulous process that involves assessing and categorizing the quality of the crocodile skins based on various factors such as size, texture, and pattern. This stage ensures that only premium quality skins are selected for further processing.</p>
                        </div>
                        <div className='col'>
                            <div className='ourFarm-image'> <img  className='ourFarm-img' src={ourPark6} alt=""/> </div>
                            <div className='overlay'></div>
                            <h4>6. Product Processing:</h4>
                            <p>The selected crocodile skins are carefully processed to produce a range of high-quality products. Skilled artisans utilize traditional and modern techniques to tan, treat, and transform the crocodile skins into leather that is used to create luxurious items such as handbags, wallets, belts, and footwear.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default OurFarm;