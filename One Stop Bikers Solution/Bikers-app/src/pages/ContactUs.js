import { useRef, useState } from 'react';
import"bootstrap/dist/css/bootstrap.css";
import './ContactUs.css'
import axios from 'axios';

function ContactUs() {

    let [message, Setmessage] = useState({ 
  
     
      name:"",
     
      email: "",

      query:""
      
       });

    let formRef = useRef();

  
  
    let handleNameAction = (e) => {
  
      let newmessage = { ...message, name: e.target.value };
  
      Setmessage(newmessage);
    };
  
   
    let handleEmailAction = (e) => {
  
      let newmessage = { ...message, email: e.target.value };
  
      Setmessage(newmessage);
    };
  
    let handleQueryAction = (e) => {
  
        let newmessage = { ...message, query: e.target.value };
    
        Setmessage(newmessage);
      };
    
      
    let addQuery = async () => {
       
        formRef.current.classList.add("was-validated");
     
        let formStatus = formRef.current.checkValidity();
        if (!formStatus) {
            alert("Please Enter Valid Data")
            return;
        }
      /*let url = `http://localhost:4000/addQuery?name=${message.name}&email=${message.email}&query=${message.query}`;
  
      await fetch(url);*/
      let url = `http://localhost:9090/add-message`;
      axios.post(url, message).then((response) => {
        console.log(response.data);
    })
       
        
  
      let newmessage = {
        name: "",
        email: "",
        query: "",
      };
      Setmessage(newmessage);

      return;
  
    };

  
    return (
      <>
        
        <div class="container row mt-5  justify-content-center " >
      <div class="content ">
        <div class="left-side col">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">&#128204; Address</div>
            <div class="text-one">C-DAC</div>
            <div class="text-two">KHARAGHAR</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">&#x260F; Phone</div>
            <div class="text-one">+918839757351</div>
            <div class="text-two">+917841901447</div>
          </div>
          <div class="email details">
            <div class="topic">&#128231; Email</div>
            <div class="text-one">kailas2718@gmail.com</div>
            <div class="text-two">Rishiv1996@gmail.com</div>
          </div>
        </div>
        <div class="right-side col">
          <div class="topic-text" style={{color: "#0099ff"}}>&#128237; Send us a message</div>
          <p>If you have any quries related to our service, you can send us message from here. It's our pleasure to help you.</p>
          <form ref = {formRef} className="needs-validation " novalidate>
            <div class="input-box">
              <input type="text"
               placeholder="Enter your name"
               minLength={3}
               value={message.name}
               onChange={handleNameAction}
               required 
               />
            </div>
            <div class="input-box">
              <input type="email" 
              placeholder="Enter your email"
              value={message.email}
               onChange={handleEmailAction}
               required 
               />
            </div>
            <div class="input-box message-box">
              <textarea 
              placeholder="Enter your message"
              minLength={10}
              value={message.query}
              onChange={handleQueryAction}
               required 
              >

              </textarea>
            </div>
            <div >
             
              
        <input
          type="button"
          value="Send Now"
          style={{ 
             height: "45px",
          width: "100%",
         color: "#fff",
        cursor: "pointer",
        'borderRadius':'10px',
        transition: "all 0.2s ease",
          background: "#0099ff"}}
          className="w-90 mt-3 mb-3"
          onClick={addQuery}
        />
            </div>
          </form>
        </div>
      </div>
    </div>

      </>
    );
  }
  

  export default ContactUs ;