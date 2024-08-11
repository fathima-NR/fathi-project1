import React from 'react'
import './footer.css'
import { FaArrowAltCircleDown } from "react-icons/fa";
import footimg1 from "../assets/1(1).png"
import footimg2 from "../assets/2(1).png"
import footimg3 from "../assets/3(1).png"
import footimg4 from "../assets/4(1).png"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footerpage() {
  return (
    <>
      <div className='background'>
        <h1 className='text-light pt-5 ms-5'> WHY CHOOSE US?:</h1>
        <div className="row mx-5" style={{ marginTop: "100px" }}>
          <div className="col-sm-3 text-white border-box">
            <img className='ms-2 mt-3 img-fluid' src={footimg1} alt="" width={80} />
            <div className='mt-4 ms-2 pb-4'>
              <h5 className='fw-bold'>EXPERTISE</h5>
              <p>Years of experience in industry</p>
            </div>
          </div>
          <div className="col-sm-3 text-white border-box">
            <img className='ms-2 mt-3 img-fluid' src={footimg2} alt="" width={80} />
            <div className='mt-4 ms-2 pb-4'>
              <h5 className='fw-bold'>QUALITY</h5>
              <p>Reliable products and service</p>
            </div>
          </div>
          <div className="col-sm-3 text-white border-box">
            <img className='ms-2 mt-3 img-fluid' src={footimg3} alt="" width={80} />
            <div className='mt-4 ms-2 pb-4'>
              <h5 className='fw-bold'>CUSTOMER SERVICES</h5>
              <p>Responsive and personalized support</p>
            </div>
          </div>
          <div className="col-sm-3 text-white border-box">
            <img className='ms-2 mt-3 img-fluid' src={footimg4} alt="" width={80} />
            <div className='mt-4 ms-2 pb-4'>
              <h5 className='fw-bold'>CUSTOMER SOLUTION</h5>
              <p>Tailoring services to the client needs</p>
            </div>
          </div>
          <div className='text-white mt-3 d-flex align-items-center justify-content-end'>
            <div>
              <h6 style={{ fontSize: "13px" }}>
                Just everything you need</h6>
              <h6 className='fw-bold'>Download Brochure</h6>
            </div>
            <span className='pb-4 ms-2 text-success download' style={{ fontSize: "70px" }}>
              <FaArrowAltCircleDown />
            </span>
          </div>
        </div>
     {/* for footer links */}
      <div className="row mt-5 mx-3 text-white">
        <div className="col-sm-3 pe-5 ">
          <h6>Liwara Technical Services LLC, Quasis, Dubai, UAE
E: sales@liwaratech.com
P: +971 55 538 8440</h6>
<h6 className='mt-5 mb-5'>© 2024 SLiwara Technical Services LLC, All Rights Reserved.</h6>
        </div>
        <div className="col-sm-2 ">
          <div className='pb-4'><h6>Quick Links</h6>
<ul  className='list-unstyled mt-3 'style={{fontSize:"14px"}}>
<li  className='mt-2' ><a href="" className="text-decoration-none link "> Services</a></li>
<li  className='mt-2' ><a href="" className="text-decoration-none link "> Contact Us</a></li>
<li  className='mt-2'><a href="" className="text-decoration-none link "> About Us</a></li>
</ul></div>

</div>
<div className="col-sm-3 text-start  ">

<h6>Services</h6>
<ul  className='list-unstyled mt-3' style={{fontSize:"14px"}}>
<li className='mt-2'><a href="" className="text-decoration-none link  "> CCTV</a></li>
<li  className='mt-2'><a href="" className="text-decoration-none link"> Access Control System</a></li>
<li  className='mt-2' ><a href="" className="text-decoration-none link ">Intruder Alarm</a></li>
<li  className='mt-2'><a href="" className="text-decoration-none link ">Fit Out Job </a></li>
<li  className='mt-2'><a href="" className="text-decoration-none link ">Automatic Sliding/glass Doors And Revolving Doors </a></li>
<li  className='mt-2'><a href="" className="text-decoration-none link ">Automatic Rolling Shutters And Garage Doors</a></li>
<li  className='mt-2'><a href="" className="text-decoration-none link ">Automatic Gates And Audio Video Intercoms </a></li>
<li  className='mt-2'> <a href="" className="text-decoration-none link ">Annual Maintenance Contracts (AMC)</a></li>
<li  className='mt-2'> <a href="" className="text-decoration-none link  "> </a></li>
</ul>


        </div>
        <div className="col-sm-3 ">
<h6 className='text-end' style={{fontSize:"14px"}}>Have a project ?</h6>
<div className="d-flex justify-content-end">
<button className=" flash-effect  mt-3 p-3 fw-bold">
    Get A Free Quote
  </button>
      </div>
      <div className='d-flex justify-content-end mt-3'>
      <span className="icon-circle"><FaFacebookF /></span>
      <span className="icon-circle"><FaInstagram /></span>
      <span className="icon-circle"><FaTwitter /></span>
    </div>

        </div>

      </div>

      </div>
    </>
  )
}

export default Footerpage
