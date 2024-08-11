import React from 'react';
import img1 from '../assets/4.jpg';
import './body.css'; // Ensure CSS is imported correctly
import cimg from "../assets/1.png";
import cimg2 from "../assets/img1.jpg";
import aimg1 from "../assets/2.png";
import aimg2 from "../assets/img2.jpg";
import iimg1 from "../assets/3.png";
import iimg2 from "../assets/img3.jpg";
import fimg1 from "../assets/4.png";
import fimg2 from "../assets/img4.jpg";
import dimg1 from "../assets/5.png";
import dimg2 from "../assets/img5.jpg";
import simg1 from "../assets/6.png";
import simg2 from "../assets/img6.jpg";
import gimg1 from "../assets/7.png";
import gimg2 from "../assets/img7.jpg";
import limg1 from "../assets/8.png";
import limg2 from "../assets/img.8.jpg";
import { FaBullseye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


import Navbar from '../component/Navbar'

function Body() {
  return (
    <>
   <Navbar/>
      <div className='bg-dark pb-1'>
        <h1 className='text-center text-light fw-bold p-5'>Who We Are ?</h1>
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <img className='img-fluid ms-3 custom-img-height pb-3' width={"90%"} src={img1} alt="" />
          </div>
          <div className="col-lg-7 col-md-6">
            <h2 className='text-light ms-3'>LIWARA TECHNICAL SERVICES LLC</h2>
            <p className='text-light mt-3 lh-lg p-3'>
              In a dynamic world, continuous evolution is crucial. As a Modern Technology Solutions and Integrated Service Management Organization, we harness technology to tackle complex business challenges and deliver exceptional value to our clients. Our unwavering commitment to customers distinguishes us. We intentionally foster a reputable organization and an appealing workplace. Through collaborative efforts and innovative technology services, we strive to positively impact our clients and communities daily.
              <br />
              Our dedicated pre-sales, post-sales and strong technical support team ensures that you receive the right technology, meeting and exceeding your expectations. With our commitment, knowledge, and expertise, we empower powerful business solutions
            </p>
            <button className='btn btn-success ms-3'>Read more <span className='text-white'><FaArrowRight /></span></button>
          </div>
        </div>
      </div>
   

      <div style={{ backgroundColor: '#fbfbfb',paddingBottom:"30px" }}>
        <h1 className='text-center' style={{ color: '#53bec4', paddingTop: "50px", fontWeight: '600' }}>WHAT WE DO</h1>
        <section id='cctv'>
        <div className="row mt-5 ms-3 bg-white" id='cctv'>
       
          <div className="col-lg-3 col-md-6 mb-3 " >
         
            <img src={cimg} alt="" width={60} className='img-fluid ms-4 mt-3' />
            <h5 className='fw-bold mt-2 ms-4' style={{ color: '#53bec4' }}>CCTV</h5>
            <ul className='mt-2'>
              <li className='list-point ' style={{ fontSize: '14px' }}> <span className='pe-3 text-success'><FaBullseye /></span> Our advanced CCTV systems provide round-the-clock surveillance for residential, commercial, and industrial spaces.</li>
              <li className='list-point mt-3 ' style={{ fontSize: '14px' }}><span className='pe-3 text-success'><FaBullseye /></span> Key features include high-resolution cameras, remote monitoring, motion detection, and night vision.</li>
              <button className="btn btn-sm mt-3 btn-success">Read More<span className='text-white ms-2'style={{fontSize:"13px"}}><FaArrowRight /></span></button>
            </ul>
           
          </div>
          <div className="col-lg-3 col-md-6 mb-3 bg-white">
            <img src={cimg2} className='full-cover-img img-fluid' alt="" />
           
          </div>
        

          <div className="col-lg-3 col-md-6 mb-3 " id='acs'>
           
            <img src={aimg1} alt="" width={60} className='img-fluid ms-4 mt-3' />
            <h5 className='fw-bold mt-2 ms-4' style={{ color: '#53bec4' }}>ACCESS CONTROL SYSTEM</h5>
            <ul className='mt-2'>
              <li className='list-point ' style={{ fontSize: '14px' }}> <span className='pe-3 text-success'><FaBullseye /></span> Our advanced CCTV systems provide round-the-clock surveillance for residential, commercial, and industrial spaces.</li>
              <li className='list-point mt-3 ' style={{ fontSize: '14px' }}><span className='pe-3 text-success'><FaBullseye /></span> Key features include high-resolution cameras, remote monitoring, motion detection, and night vision.</li>
              <button className="btn btn-sm mt-3 btn-success">Read More<span className='text-white ms-2'style={{fontSize:"13px"}}><FaArrowRight /></span></button>
            </ul>
          
          </div>
          <div className="col-lg-3 col-md-6 mb-3 bg-white">
            <img src={aimg2} className='full-cover-img' alt="" />
          </div>
        </div>
        </section>
        <section id='ia'>
        <div className="row row1 mt-3 ms-3 bg-white">
          <div className="col-lg-3 col-md-6 mb-3 image-col" id='ia'>
            <img src={iimg2} className='full-cover-img ' alt="Image 1" />
          </div>
          <div className="col-lg-3 col-md-6 mb-3 text-col">
            <img src={iimg1} alt="Icon 1" width={60} className='img-fluid ms-4 mt-3' />
            <h5 className='fw-bold mt-2 ms-4' style={{ color: '#53bec4' }}>INTRUDER ALARM</h5>
            <ul className='mt-2'>
              <li className='list-point ' style={{ fontSize: '14px' }}> <span className='pe-3 text-success'><FaBullseye /></span> Our advanced CCTV systems provide round-the-clock surveillance for residential, commercial, and industrial spaces.</li>
              <li className='list-point mt-3 ' style={{ fontSize: '14px' }}><span className='pe-3 text-success'><FaBullseye /></span> Key features include high-resolution cameras, remote monitoring, motion detection, and night vision.</li>
              <button className="btn btn-sm mt-3 btn-success">Read More<span className='text-white ms-2'style={{fontSize:"13px"}}><FaArrowRight /></span></button>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-3   image-col" id='foj'>
            <img src={fimg2} className='full-cover-img' alt="Image 2" />
          </div>
          <div className="col-lg-3 col-md-6 mb-3 text-col">
            <img src={fimg1} alt="Icon 2" width={60} className='img-fluid ms-4 mt-3' />
            <h5 className='fw-bold mt-2 ms-4' style={{ color: '#53bec4' }}>FIT OUT JOB</h5>
            <ul className='mt-2'>
              <li className='list-point ' style={{ fontSize: '14px' }}> <span className='pe-3 text-success'><FaBullseye /></span> Our advanced CCTV systems provide round-the-clock surveillance for residential, commercial, and industrial spaces.</li>
              <li className='list-point mt-3' style={{ fontSize: '14px' }}><span className='pe-3 text-success'><FaBullseye /></span> Key features include high-resolution cameras, remote monitoring, motion detection, and night vision.</li>
              <button className="btn btn-sm mt-3 btn-success">Read More<span className='text-white ms-2'style={{fontSize:"13px"}}><FaArrowRight /></span></button>
            </ul>
          </div>
        </div>
        </section>
       <section id='asc'>
        <div className="row mt-3 ms-3 bg-white">
          <div className="col-lg-3 col-md-6 mb-3 "id='asc'>
       
            <img src={dimg1} alt="" width={60} className='img-fluid ms-4 mt-3' />
            <h5 className='fw-bold mt-2 ms-4' style={{ color: '#53bec4' }}>AUTOMATIC SLIDING/GLASS DOORS AND REVOLVING DOORS</h5>
            <ul className='mt-2'>
              <li className='list-point ' style={{ fontSize: '14px' }}> <span className='pe-3 text-success'><FaBullseye /></span> Our advanced CCTV systemsresidential, commercial, and industrial spaces.</li>
              <li className='list-point mt-3 ' style={{ fontSize: '14px' }}><span className='pe-3 text-success'><FaBullseye /></span> Key features include  and night vision.</li>
              <button className="btn btn-sm mt-3 btn-success">Read More<span className='text-white ms-2'style={{fontSize:"13px"}}><FaArrowRight /></span></button>
            </ul>
           
          </div>
          <div className="col-lg-3 col-md-6 mb-3 bg-white">
            <img src={dimg2} className='full-cover-img img-fluid' alt="" />
          </div>
          <div className="col-lg-3 col-md-6 mb-3 bg-white " id='ars'>
            <img src={simg1} alt="" width={60} className='img-fluid ms-4 mt-3' />
            <h5 className='fw-bold mt-2 ms-4' style={{ color: '#53bec4' }}>AUTOMATIC ROLLING SHUTTERS AND GARAGE DOORS</h5>
            <ul className='mt-2'>
              <li className='list-point' style={{ fontSize: '14px' }}> <span className='pe-3 text-success'><FaBullseye /></span> Our advanced CCTV systemsindustrial spaces.</li>
              <li className='list-point mt-3 ' style={{ fontSize: '14px' }}><span className='pe-3 text-success'><FaBullseye /></span> Key features include high-resolution motion detection high-resolution motion, and night vision.</li>
              <button className="btn btn-sm mt-3 btn-success">Read More<span className='text-white ms-2'style={{fontSize:"13px"}}><FaArrowRight /></span></button>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-3 bg-white">
            <img src={simg2} className='full-cover-img' alt="" />
          </div>
        </div>
        </section>
        <section id='aga'>
        <div className="row row1 mt-3 ms-3 bg-white">
          <div className="col-lg-3 col-md-6 mb-3 image-col "id='aga'>
            <img src={gimg2} className='full-cover-img ' alt="Image 1" />
          </div>
          <div className="col-lg-3 col-md-6 mb-3 text-col ">
            <img src={gimg1} alt="Icon 1" width={60} className='img-fluid ms-4 mt-3' />
            <h5 className='fw-bold mt-2 ms-4' style={{ color: '#53bec4' }}>AUTOMATIC GATES AND AUDIO VIDEO INTERCOMS</h5>
            <ul className='mt-2'>
              <li className='list-point ' style={{ fontSize: '14px' }}> <span className='pe-3 text-success'><FaBullseye /></span> Our advanced CCTV systems provide , commercial, and industrial spaces.</li>
              <li className='list-point mt-3' style={{ fontSize: '14px' }}><span className='pe-3 text-success'><FaBullseye /></span> Key features monitoring, motion detection, and night vision.</li>
              <button className="btn btn-sm mt-3 btn-success">Read More <span className='text-white ms-2'style={{fontSize:"13px"}}><FaArrowRight /></span></button>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-3   image-col"id='amc'>
            <img src={limg2} className='full-cover-img' alt="Image 2" />
          </div>
          <div className="col-lg-3 col-md-6 mb-3 text-col">
            <img src={limg1} alt="Icon 2" width={60} className='img-fluid ms-4 mt-3' />
            <h5 className='fw-bold mt-2 ms-4' style={{ color: '#53bec4' }}>ANNUAL MAINTENANCE CONTRACTS (AMC)</h5>
            <ul className='mt-2'>
              <li className='list-point' style={{ fontSize: '14px' }}> <span className='pe-3 text-success'><FaBullseye /></span> Our advanced CCTV systems provide round-the-clock surveillance.</li>
              <li className='list-point mt-3 ' style={{ fontSize: '14px' }}><span className='pe-3 text-success'><FaBullseye /></span> Key features include high-resolution cameras  motion detection, and night vision.</li>
              <button className="btn btn-sm mt-3 btn-success">Read More <span className='text-white ms-2'style={{fontSize:"13px"}}><FaArrowRight /></span></button>
            </ul>
          </div>
        </div>
 </section>
        <button className=" fs-5 fw-bold d-flex justify-content-center align-items-center flash-effect1 mx-auto p-3  mt-4">Enquiry Now <span className='ms-2 fs-6'><FaArrowRight /></span></button>        
      </div>

      
    </>
  );
}

export default Body;
