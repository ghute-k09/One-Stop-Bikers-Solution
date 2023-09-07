import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



function CarCollection() {

    const [carList, setCarList] = useState([]);

    useEffect(() => {
        getAllCars ();
    }, []);
  
    const getAllCars = async () => {
      let url = `http://localhost:4000/showcarcollection`;
      let res = await fetch(url);
      let list = await res.json();
  
      setCarList([...list]);
      }
    
     
    
    return (
      <>
      <div className="row justify-content-center bg-dark">
        <div className="col-md-12 col-sm-12">
          <div className="row">
          {carList.map((item, index) => (
            <div className="col-sm-12 col-md-4 mt-2 mb-4">
            
              <div className="card">
                <img
                  src={`assets/bike/g${index+1}.jpg.jpg`}
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" style={{color: "#0099ff"}}>
                  {index+1}. {item.carname} </h5>
                  <p className="card-text">
                    <strong>1. </strong>Brand :{item.mfgcompany}<br/>
                    <strong>2. </strong>Seating Capacity : {item.seating}<br/>
                    <strong>3. </strong>Engine :{item.engine}<br/>
                    <strong>4. </strong>Hourly Rate :{item.hourlyrate} Rs.
                  </p>
                 <Nav.Link  style={{ 
             height: "45px",
             padding:"10px",
             width: "25%",
             color: "#fff",
             cursor: "pointer",
            'borderRadius':'10px',
            transition: "all 0.2s ease",
            background: "#0099ff"}} as={Link} to={"/carbook"}>
                BOOK NOW
              </Nav.Link>/
                </div>
              </div>
              </div>
            ))}
            </div>
            </div>
            </div>
           
            </>  
    
    )
}
export default CarCollection;