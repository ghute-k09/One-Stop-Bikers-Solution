import React, { Fragment } from 'react';

function Home() {
return(
    <Fragment>
        
    

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/bike/acce1.jpg"  className="d-block w-100" alt="..."/>
            <div className="carousel-caption  d-md-block">
              <h2 style={{color: 'black' }}>Welcome to Bike Solution</h2>
              <h4 style={{color: 'black' }}> "Unlock the freedom to go anywhere with our reliable bike product"</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src="assets/bike/2-2biker.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-md-block">
              <h3 style={{ color: 'black'}}>Easy step for find your bike solution</h3>
              <p style={{ color: 'black'}}> "Explore our wide range of bike product for any journey"</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="assets/bike/3helmet.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption  d-md-block">
              <h3>"Buy with ease, explore with pleasure."</h3>
              <p> "Choose from our fleet of quality product and embark on a memorable journey"</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  

    <br/>

    

    <section className="offer">
      <div className="container">
        <div className="text-center my-5">
          <h1 data-aos="fade-up" data-aos-offset="200">What we<span className="text-primary"> offer</span> </h1>
          <hr className="w-25 m-auto"/>
          <br/>
          <h2 className="mb-2">Featured Product</h2>
          </div>

          <div className="card-group">
            <div className="card" data-aos="zoom-in-right" data-aos-offset="500">
              <img src="assets/bike/bs3.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Bikes</h5>
                <p className="card-text">The is a versatile and practical MPV (Multi-Purpose Vehicle) that offers the perfect combination of comfort, space, and fuel efficiency. With its stylish design and spacious interior, the Ertiga is ideal for both city driving and family adventures. Equipped with advanced safety features and a responsive engine, this reliable vehicle provides a smooth and enjoyable driving experience. Whether you need ample seating for your entire family or extra room for your luggage, the Maruti Ertiga delivers on both functionality and style. Experience the convenience and versatility of the Maruti Ertiga and embark on your journeys with confidence.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card" data-aos="zoom-in-right" data-aos-offset="500">
              <img src="assets/bike/shoes1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Shoes</h5>
                <p className="card-text">The is an impressive SUV that combines ruggedness with sophistication, making it an excellent choice for your car rental needs. With its bold and commanding presence, the Safari stands out on the road and offers a spacious and comfortable interior for a premium driving experience. Equipped with modern features and advanced safety technologies, this vehicle ensures both driver and passenger comfort and security. Whether you're embarking on a family vacation or exploring off-road destinations, the Tata Safari provides ample seating and generous cargo space to accommodate your needs. With its powerful engine and smooth handling, the Safari guarantees a pleasurable and reliable journey. Rent the Tata Safari and enjoy the perfect blend of comfort, versatility, and adventure for your next trip.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card" data-aos="zoom-in-right" data-aos-offset="500">
              <img src="assets/bike/modi1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Modified Bikes</h5>
                <p className="card-text">The  is the epitome of luxury and performance, making it an exceptional choice for discerning individuals seeking a premium car rental experience. This full-size SUV exudes elegance with its sleek lines, bold grille, and distinctive BMW design elements. Inside the X7, you'll find a meticulously crafted cabin that blends opulence with cutting-edge technology, offering a refined and comfortable environment for both driver and passengers. With spacious seating for up to seven people and ample cargo capacity, the X7 is perfect for family vacations or group outings. Equipped with a powerful engine and advanced driving dynamics, this SUV delivers a thrilling driving experience combined with impressive handling and stability. From its luxurious interior to its exceptional performance, the BMW X7 represents the pinnacle of automotive excellence and is the ideal choice for those seeking an extraordinary car rental experience.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

            <div className="card" data-aos="zoom-in-right" data-aos-offset="500">
              <img src="assets/bike/seat1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Seats</h5>
                <p className="card-text">The  is a popular and versatile hatchback that offers an enjoyable driving experience and excellent fuel efficiency, making it an ideal choice for car rentals. With its sleek and sporty design, the Swift stands out on the road and exudes a sense of dynamism. Inside, the cabin is well-designed, comfortable, and equipped with modern features to enhance the driving experience. The Swift's compact size and nimble handling make it perfect for zipping through city streets and navigating tight parking spaces with ease. Whether you're traveling solo or with a small group, the Swift offers ample space for passengers and their luggage. With its reliable performance and renowned Maruti Suzuki reliability, the Swift ensures a hassle-free and enjoyable rental experience. Rent the Maruti Suzuki Swift and experience the perfect blend of style, efficiency, and versatility for your next journey.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>

      </div>
    </section>

    
    <br/>


     
    <section className="service">
      <div className="container">
        <div className="text-center my-5">
          <h2 className="mb-2">Services</h2>
          <br/>
          <h1 data-aos="zoom-in-left" data-aos-offset="300">Our Latest<span className="text-primary"> Services</span> </h1>
          <hr className="w-25 m-auto"/>
          <br/>
          </div>

          <div className="card-group">
            <div className="card" data-aos="zoom-in-left" data-aos-offset="500">
              <img src="assets/bike/Service1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Bike Servicing</h5>
                <p className="card-text">At City Transfer, we understand the importance of having a trusted and efficient car rental service. That's why we offer a diverse fleet of well-maintained vehicles, ranging from compact cars to spacious SUVs, to cater to your specific needs. Our commitment to quality ensures that every vehicle is thoroughly inspected and equipped with modern amenities for your comfort and safety.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card" data-aos="zoom-in-right" data-aos-offset="500">
              <img src="assets/bike/service2.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Bike Washing</h5>
                <p className="card-text">Celebrate your special day in style with our exclusive wedding car rental services. At <strong>Bike solution</strong>, we understand the importance of making your wedding day truly memorable, and we are here to add a touch of elegance and sophistication to your ceremony.

                  Imagine arriving at your wedding venue in a luxurious, chauffeur-driven car, making a grand entrance that will leave your guests in awe. Our fleet of exquisite vehicles, ranging from sleek sedans to majestic limousines, is meticulously maintained to ensure utmost comfort and className.
                  
                  We offer a range of wedding packages designed to cater to your specific needs and preferences. Whether you're looking for a classic vintage car for a traditional ceremony or a modern luxury vehicle for a contemporary celebration, we have the perfect ride to complement your style.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card" data-aos="zoom-in-left" data-aos-offset="500">
              <img src="assets/bike/modi2.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Bike Modification</h5>
                <p className="card-text">Make your journey to the airport stress-free and convenient with our reliable city-to-airport car rental services. At <strong>Bike solution</strong>, we understand the importance of timely transportation when it comes to catching a flight, and we are here to ensure a smooth and comfortable ride to the airport.

                  We offer a wide selection of well-maintained vehicles to suit your travel needs. Whether you're traveling solo or with a group, our fleet includes sedans, SUVs, and spacious vans to accommodate your luggage and provide ample space for a comfortable journey.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            </div>
          </div>

      </section>
    

    

    

    <section className="testimonial">
      <div className="container">
        <div className="text-center my-5">
          <h2 className="mb-2">Testimonial</h2>
          <br/>
          <h1 data-aos="zoom-in-right" data-aos-offset="400">Our Happy<span className="text-primary"> Clients</span> </h1>
          <hr className="w-25 m-auto"/>
          <br/>
          </div>

    <section className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100" data-aos="zoom-in-up" data-aos-offset="500">
          <img src="assets/bike/man1.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">Victor Simth</h4>
            <p className="card-text">"Renting a bike form <strong>BikeSolution</strong> was an absolute pleasure. The entire process, from booking online to picking up the car, was smooth and hassle-free. The vehicle was in excellent condition and drove like a dream. The staff was friendly, professional, and went above and beyond to ensure our needs were met. I highly recommend [Your Company Name] for their outstanding service and quality fleet of cars."</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 days ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100" data-aos="zoom-in-up" data-aos-offset="500">
          <img src="assets/bike/man2.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">Odean Williams</h4>
            <p className="card-text">"Our experience with <strong>BikeSolutions</strong> was exceptional. We needed a car for a family vacation, and they provided us with a spacious and comfortable SUV that was perfect for our needs. The booking process was straightforward, and the pickup and drop-off were seamless. The car was clean, well-maintained, and came with all the necessary features for a pleasant journey. We were impressed with the level of customer service and would definitely choose [Your Company Name] for our future car rental needs."</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 8 days ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100" data-aos="zoom-in-up" data-aos-offset="500">
          <img src="assets/bike/man3.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">Steven Arnold</h4>
            <p className="card-text">"I recently went for a service at <strong>BikeSolutions</strong>, and I must say it was one of the best rental experiences I've had. The staff was friendly, professional, and efficient. They helped me select the right car for my trip and provided all the necessary information. The vehicle itself was in excellent condition, clean, and fuel-efficient. I appreciated the transparent pricing and the overall value for money. I highly recommend [Your Company Name] for anyone in need of a reliable and trustworthy car rental service."</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 16 days ago</small>
          </div>
        </div>
      </div>
      
    </section>
    
  
    

    <section className="about my-5" id="about"/>
        <div className="container">
            <div className="text-center my-5"/>
                <h1  data-aos="zoom-in-left" data-aos-offset="500" >About<span className="text-primary"> us -</span> </h1>
                {/*<hr className="w-25 m-auto"/>*/}
                <br/>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-12" data-aos="zoom-in-right" data-aos-offset="450">
                <h1>What do you <span className="text-primary">want to know ?</span></h1>

                <p className="p-2">
                  "Welcome to <strong>BikeSolution</strong>, where convenience meets quality. We are dedicated to providing exceptional car rental services tailored to meet your travel needs. With a diverse fleet of vehicles ranging from sleek sedans to spacious SUVs, we have the perfect option for every occasion and budget. Whether you're embarking on a family road trip, attending a business conference, or simply exploring a new city, our reliable and well-maintained vehicles will ensure a smooth and comfortable journey. Our commitment to customer satisfaction extends beyond just providing top-notch vehicles , our friendly and knowledgeable team is here to assist you every step of the way. We offer competitive rates, hassle-free bookings, and flexible rental periods, making it easier than ever to hit the road with confidence. Experience the difference with <strong>BikeSolutions</strong> and make your travel dreams a reality."
                </p>
                <button type="button" className="btn btn-primary mb-5">Our BikeSolution Policies</button>

                <div className="accordion" id="accordionExample" data-aos="zoom-in-left" data-aos-offset="450">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Age Restriction and Driving License
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>Age Restriction - </strong>Drivers must be at least 21 years old (or as specified by local laws) and hold a valid driver's license for a minimum of 1 year. Additional fees or age surcharges may apply for drivers under 25.<br/>
                          <br/>
                          <strong> Driving License - </strong>A valid driver's license issued by the country of residence is required. International driver's licenses are accepted with a valid passport. Temporary or provisional licenses may not be accepted.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Payment Methods and Cancellation Policy
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>Payment Methods - </strong> We accept major credit cards (Visa, Mastercard, American Express) and debit cards. Cash payments or prepaid cards are not accepted. A valid credit card is required at the time of reservation and will be used for the security deposit.<br/>
                          <br/>
                          <strong>Cancellation Policy - </strong>Cancellations made 48 hours prior to the reservation start time are eligible for a full refund. Cancellations within 48 hours may be subject to a cancellation fee. No-shows or cancellations after the reservation start time may result in a full charge for the rental period.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Vehicle Availability,Fuel Policy and Additional Things
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>Vehicle Availability - </strong>  While we strive to provide the selected vehicle, in rare cases, we may need to provide an alternative vehicle of similar size and features. We will notify you in advance if such a situation arises and offer suitable alternatives.<br/>
                          <br/>
                          <strong>Fuel Policy - </strong> Vehicles are provided with a full tank of fuel and should be returned with a full tank. If the vehicle is not returned with a full tank, a refueling charge will apply, in addition to the cost of the missing fuel.
                          <br/>
                          <br/>
                          <strong>Additional things - </strong> If you want to purchase a bike or you want bike servicing or bike modification or any type of additional facility from our side for this you have visit out our facility.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
                <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end my-7 " data-aos="fade-right" data-aos-offset="400">
                    <img src="assets/bike/bs1.jpg" className="img-fluid img-thumbnail"/>
                    
                </div>
            </div>
        </div>
        </section>

    <br/>
  
    

  

  <footer className="container-fluid">
    <p className="float-right">
      <a href="#" className='fs-1'>&#128742;</a>Back to top
    </p>
  </footer>

    


    
    </Fragment>

 ) 
 } 
export default Home;