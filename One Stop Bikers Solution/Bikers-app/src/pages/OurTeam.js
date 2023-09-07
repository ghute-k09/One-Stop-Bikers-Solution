import React from "react";

function Ourteam(){
    let message=`When you need to innovate, you need collaboration`;
    return(
     <>   
    <section className="section-white">
        <div className="container">
        <div className="text-center my-5">
                <h1 data-aos="fade-up" data-aos-offset="200">About<span class="text-primary"> us</span> </h1>
                            </div>
        <div className="row">
        <h1>What do you <span className="text-primary" >want to know ?</span></h1>
            <div className="col-sm-12 col-md-6 col-lg-6 text-left-justify">
            <p className="p-2">
                  "Welcome to <strong>BikeSolutions</strong>, where convenience meets quality. We are dedicated to providing exceptional bike solution services tailored to meet your travel needs. With a diverse fleet of vehicles ranging from sleek sedans to spacious SUVs, we have the perfect option for every occasion and budget. Whether you're embarking on a family road trip, attending a business conference, or simply exploring a new city, our reliable and well-maintained vehicles will ensure a smooth and comfortable journey. Our commitment to customer satisfaction extends beyond just providing top-notch vehicles , our friendly and knowledgeable team is here to assist you every step of the way. We offer competitive rates, hassle-free bookings, and flexible rental periods, making it easier than ever to hit the road with confidence. Experience the difference with <strong>BikeSolution</strong> and make your travel dreams a reality."
                </p>
            </div>
            
            <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="assets/bike/allinone1.jpg"/>
            </div>
     
        
        
                
                
               
             
             
                
                
                </div>
            </div>
            

          
       
    </section>

    
<section className="team my -5 text-center" id="team">
<div className="container">
    <div className="text-center my-5">
        <h1 data-aos="zoom-in-right" data-aos-offset="300">Our<span className="text-primary"> Team</span> </h1>
        <hr className="w-25 m-auto"/>
    </div>

    <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-up" data-aos-offset="350">
            <div className="card">
                <div className="card-body">
                    <img src="assets/img/rishi.jpg" className="img-fluid rounded-circle border border-primary p-2"/>
                  <h5 className="card-title mt-3">Rishiv Yadav</h5>
                  <p className="card-text">Cdac Mumbai</p>
                  <a href="#" className="btn btn-primary">PG-DAC</a>
                </div>
              </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-up" data-aos-offset="350">
            <div className="card">
                <div className="card-body">
                    <img src="assets/img/kailas.jpeg" className="img-fluid rounded-circle border border-primary p-2"/> 
                  <h5 className="card-title mt-3">Kailas Ghute</h5>
                  <p className="card-text">Cdac Mumbai</p>
                  <a href="#" className="btn btn-primary">PG-DAC</a>
                </div>
              </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12" data-aos="zoom-in-up" data-aos-offset="350">
            <div className="card">
                <div className="card-body">
                    <img src="assets/img/harshad.jpeg" className="img-fluid rounded-circle border border-primary p-2"/>
                  <h5 className="card-title mt-3">Harshad Bhodake</h5>
                  <p className="card-text">Cdac Mumbai</p>
                  <a href="#" className="btn btn-primary">PG-DAC</a>
                </div>
              </div>
        </div>
    </div>


</div>

</section>
</>
    )
}
export default Ourteam;