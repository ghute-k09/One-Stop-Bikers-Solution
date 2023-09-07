/*import { useEffect, useState } from "react";

function BookedCar() {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    getAllBooking ();
  }, []);

  const getAllBooking = async () => {
    let url = `http://localhost:4000/showbookedcars`;
    let res = await fetch(url);
    let list = await res.json();

    setBookingList([...list]);
    }
  
    


  return (
    <>
       <div className="row justify-content-center ">
      <div className="row justify-content-center " style={{maxWidth:"70vw"}}>
        <div className="col-sm-12 col-md-12">
          <h3 className="fs-3">&#127949;Booked Product List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
                <th scope="col">Product</th>
                
              </tr>
            </thead>
            <tbody>
              {bookingList.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{item.source}</td>
                  
                  <td>{item.destination}</td>
                  <td >{item.Car}</td>
                  <td className="fs-5">
                    
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );

};

export default BookedCar;8*/