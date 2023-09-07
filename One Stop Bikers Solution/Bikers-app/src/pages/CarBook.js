import  { useRef, useState } from 'react';
import"bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

function CarBook(){


    const options = [
        { value: 'glove-one', label: 'Glove One' },
      //  { value: 'glove-one', label: 'Glove One' },
        { value: 'glove-two', label: 'Glove Two' },
       // { value: 'glove-two', label: 'Glove Two' },
        { value: 'glove-three', label: 'Glove Three' },
       // { value: 'glove-three', label: 'Glove Three' },
        { value: 'helmet-one', label: 'Helmet One' },
       // { value: 'helmet-one', label: 'Helmet One' },
        { value: 'helmet-two', label: 'Helmet Two' },
       // { value: 'helmet-two', label: 'Helmet Two' },
        { value: 'helmet-three', label: 'Helmet Three' },
       // { value: 'helmet-three', label: 'Helmet Three' },
        { value: 'jacket-one', label: 'Jacket One' },
       // { value: 'jacket-one', label: 'Jacket One' },
        { value: 'jacket-two', label: 'Jacket Two' },
      //  { value: 'jacket-two', label: 'Jacket Two' },
        { value: 'jacket-three', label: 'Jacket Three' },
       // { value: 'jacket-three', label: 'Jacket Three' },
      ];

      let formRef = useRef();

        let [booking , setBooking] = useState({ 
  
            name: "", 
            location:"",
            product:""  
             });
          

             let handlesourceAction = (e) => {
  
                let newBooking = {...booking, name: e.target.value };
            
                setBooking(newBooking);
              };

              let handledestinationAction = (e) => {
  
                let newBooking = {...booking, location: e.target.value };
            
                setBooking(newBooking);
              };

              let handlecarAction = (e) => {
  
                let newBooking = {...booking, product: e.target.value };
            
                setBooking(newBooking);
              };


        let addBooking = async () => {
       
           try{ 
             formRef.current.classList.add("was-validated");
            
               let formStatus = formRef.current.checkValidity();
               if (!formStatus) {
                 alert("Please Enter Valid Data")
                   return;
               }
          /*   let url = `http://localhost:9090/addbooking?source=${booking.source}&dest=${booking.destination}&car=${booking.car}`;
         
             let res = await fetch(url);*/

             let url = `http://localhost:9090/add-goal`;
         
             let res = axios.post(url, booking).then((response) => {
              console.log(response.data);
          })
              
             
             if (res.status !== 200) {
               let serverMsg = await res.text();
               throw new Error(serverMsg);
             }  

             
      let newBooking = {
        name: "", 
            location:"",
            product:"" 
      };
      setBooking(newBooking);
         
            formRef.current.classList.remove("was-validated");
             alert("Booked Successfully")
            }
            
            catch (err) {
                alert("Booked Sucessfully");
              }

            /*  try {
                // Perform the booking operation
                
                // If the booking is successful
                formRef.current.classList.remove("was-validated");
                alert("Booked Successfully");
              } catch (err) {
                // If an error occurs, check if it is due to "already booked"
                if (err.message === "already Booked") {
                  // Handle the "already booked" case
                  alert("Already Booked");
                } else {
                  // Handle other errors
                  alert("Error: " + err.message);
                }
              }
              finally{

              }*/
              
                return;
                
     };

  return (
    <>
    <div className="row justify-content-center ">
      
      <div className="row justify-content-center align-items-center " style={{ width: "50vw" }}>
      <header className='fs-2 justify-content-center'>	&#127949;  Book A Product</header>
      <form ref={formRef} className="needs-validation bg-primary-subtle mt-1 col-md-6 col-sm-12 " style={{'borderRadius':'10px',width: "90vw"}}novalidate>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            minLength={3}
            className="form-control"
            value={booking.name}
            onChange={handlesourceAction}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            className="form-control"
            minLength={3}
            placeholder="Enter Location"
            value={booking.location}
            onChange={handledestinationAction}
            required
          />
   </div>
        <div>
          <label htmlFor="option">Select Product Again</label>

          <select id="option"  value={booking.product} 
          onChange={handlecarAction} 
          className="form-control" 
          required>

            <option value="">Click to see products</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}

          </select>
        </div>
        <input
          type="button"
          value="Confirm Booking"
          style={{ 
            height: "45px",
          width: "100%",
          color: "#fff",
         cursor: "pointer",
         'borderRadius':'10px',
         transition: "all 0.2s ease",
          background: "#0099ff"}}
          className="w-90 mt-3 mb-3"
          onClick={addBooking}
        />
      </form>
    </div>
    </div>
    </>
  );
  };


export default CarBook;