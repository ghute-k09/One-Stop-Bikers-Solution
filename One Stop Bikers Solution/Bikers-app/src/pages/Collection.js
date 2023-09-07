import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Collection(){
    
    return(
      <>
      <div className="row justify-content-center bg-dark">
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g1.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Glove One
                  </h5>
                  <p className="card-text">
                    <strong>1. </strong>Leather Material<br/>
                    <strong>2. </strong>Comfortable and snug fit<br/>
                    <strong>3. </strong>Improved Gripping over Motorcycle<br/>
                    <strong>4. </strong>Water resistance and dry during rain rides
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

            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g2.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Glove Two</h5>
                  <p className="card-text">
                  <strong>1. </strong>Leather Material<br/>
                    <strong>2. </strong>Comfortable and snug fit<br/>
                    <strong>3. </strong>Improved Gripping over Motorcycle<br/>
                    <strong>4. </strong>Water resistance and dry during rain rides
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

            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g3.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Glove Three</h5>
                  <p className="card-text">
                  <strong>1. </strong>Leather Material<br/>
                    <strong>2. </strong>Comfortable and snug fit<br/>
                    <strong>3. </strong>Improved Gripping over Motorcycle<br/>
                    <strong>4. </strong>Water resistance and dry during rain rides
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
            <br />
            <hr />
            <br />
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g4.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Helmet One
                  </h5>
                  <p className="card-text">
                    <strong>1. </strong>High Quality Material used liker polycarbonate<br/>
                    <strong>2. </strong>Well designed according to rider convenience<br/>
                    <strong>3. </strong>Comfortable to wear<br/>
                    <strong>4. </strong>ISO Certified
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

            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g5.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Helmet Two</h5>
                  <p className="card-text">
                  <strong>1. </strong>High Quality Material used liker polycarbonate<br/>
                    <strong>2. </strong>Well designed according to rider convenience<br/>
                    <strong>3. </strong>Comfortable to wear<br/>
                    <strong>4. </strong>ISO Certified
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

            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g6.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Helmet Three
                  </h5>
                  <p className="card-text">
                  <strong>1. </strong>High Quality Material used liker polycarbonate<br/>
                    <strong>2. </strong>Well designed according to rider convenience<br/>
                    <strong>3. </strong>Comfortable to wear<br/>
                    <strong>4. </strong>ISO Certified
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
            <br />
            <hr />
            <br />
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g7.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Jacket One
                  </h5>
                  <p className="card-text">
                    <strong>1. </strong>High quality material used<br/>
                    <strong>2. </strong>Fit and comfortable for long rides<br/>
                    <strong>3. </strong>Rain resistance <br/>
                    <strong>4. </strong>Stylish and detailed design
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

            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g8.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Jacket Two</h5>
                  <p className="card-text">
                  <strong>1. </strong>High quality material used<br/>
                    <strong>2. </strong>Fit and comfortable for long rides<br/>
                    <strong>3. </strong>Rain resistance <br/>
                    <strong>4. </strong>Stylish and detailed design
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
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src="assets/bike/g9.jpg.jpg"
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Jacket Three</h5>
                  <p className="card-text">
                  <strong>1. </strong>High quality material used<br/>
                    <strong>2. </strong>Fit and comfortable for long rides<br/>
                    <strong>3. </strong>Rain resistance <br/>
                    <strong>4. </strong>Stylish and detailed design
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
          </div>
        </div>
        <br />
        <hr />
        <br />
      </div>
      </>  
    
    )
}
export default Collection;