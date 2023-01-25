import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";
import "./balaji.css";
function Balaji() {
  return (
    <>
      <Eheader />
      <div className="Ebanner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10"
              src="https://www.shankarseyehospital.org/assets/images/banner07.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10"
              src="http://minhtue.com/wp-content/uploads/2019/09/eye-slide.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10"
              src="https://thumbs.dreamstime.com/b/blue-eye-looking-exam-chart-eye-care-concept-blue-eye-exam-144398513.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10"
              src="https://www.carecredit.com/sites/cc/image/types-eye-tests.jpg"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Esurgery">
        <div className="Eservice">
          <h2>GLAUCOMA</h2>
          <p>
            Glaucoma Is A Term For A Group Of Eye Disorders Which Result In
            Damage To The Optic Nerve. This Is Most Often Due To Increased
            Pressure In The Eye. The Disorders Can Be Roughly Divided Into Two
            Main Categories: “Open-Angle” And “Closed-Angle” Glaucoma.
          </p>
        </div>
        <div className="Eservice">
          <h2>CATARACT SURGERY</h2>
          <p>
            Cataract Surgery Is The Removal Of The Natural Lens Of The Eye That
            Has Developed An Opacification, Which Is Referred To As A Cataract.
            Metabolic Changes Of The Crystalline Lens Fibers Over Time Lead To
            The Development Of The Cataract And Loss Of Transparency, Causing
            Impairment Or Loss Of Vision
          </p>
        </div>
        <div className="Eservice">
          <h2>OPHTHALMOLOGY</h2>
          <p>
            Ophthalmology Is A Branch Of Medicine Specializing In The Anatomy,
            Function And Diseases Of The Eye. Ophthalmologist Is A Specialist In
            Medical And Surgical Eye Problems. Since Ophthalmologists Perform
            Operations On Eyes, They Are Both Surgical And Medical Specialists.
          </p>
        </div>
      </div>
      <div className="choose">
        <h1>WHY CHOOSE US</h1>
      </div>
      <div className="Ehospital">
        <h1>Balaji Eye Hospital</h1>
        <p>
          Your Eyes Are An Important Part Of Your Health. There Are Many Things
          You Can Do To Keep Them Healthy And Make Sure You Are Seeing Your
          Best.
        </p>

        <div className="Elists">
          <div className="Eleftul">
            <ul>
              <li>Healthy Eyes</li>
              <li>Great Infrastructure</li>
              <li>Latest Technology</li>
              <li>Expert Surgeons</li>
            </ul>
          </div>
          <div className="vl"></div>
          <div className="Erightul">
            <ul>
              <li>Eat for Good Vision</li>
              <li>Wear Sunglasses</li>
              <li>Use Safety Eyewear</li>
              <li>Look away from the computer screen</li>
              <li>Visit your Eye Doctor regularly</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tech">
        <div className="eyetech">
          <h1>
            OUR TECHNOLOGICAL SERVICES HAS BEEN <br></br>IMPROVED DAY BY DAY
          </h1>
          <h4>Visit Has Exceeded Our Expectations</h4>
        </div>
        <div className="eyebutton">
          <button>About As</button>
        </div>
      </div>
      <div className="eyepera">
        <div className="ep1">
          <h5>What is the difference between myopia and hypermetropia ?</h5>
          <p>
            Myopia and Hypermetropia are both common eye conditions. Myopia is
            also known as short sightedness in which a person can see clearly
            the near objects, whereas the faraway objects appear blurred. On the
            other hand, Hypermetropia, also known as long sightedness is a
            condition in which a person can see clearly far away objects but the
            near ones appear blurry and not normal.
          </p>
        </div>
        <div className="ep2">
          <h5>Does computer cause eye damage?</h5>
          <p>
            The truth is, there is no good evidence that staring at a computer
            will cause permanent eye damage. However, computers can cause many
            uncomfortable eye-related symptoms such as eyestrain, dry eyes,
            headache, fatigue, difficulty focusing, blurred vision, and shoulder
            and neck pain.
          </p>
        </div>
        <div className="ep3">
          <h5>What Is an Eye Transplant?</h5>
          <p>
            Millions of people around the world suffer vision loss that is
            irreversible, so eye doctors have worked to replace parts of the eye
            for centuries. While whole-eye transplants are currently not
            feasible, some parts of the eye can be successfully replaced with
            donor tissue.
          </p>
        </div>
      </div>
      <Efooter />
    </>
  );
}
export { Balaji };
function Eheader() {
  const [data, setdata] = useState(false);
  return (
    <>
      <div className="Ehome-nav">
        <div className="Elogo">
          <li>
            <Link to="/">
              <img
                src="https://us.123rf.com/450wm/lumut/lumut1709/lumut170900918/86958940-branding-identidad-corporativa-de-dise%C3%B1o-de-vector-de-logotipo-de-cuidado-de-ojo.jpg"
                width={120}
                height={80}
              ></img>
            </Link>
          </li>
        </div>
        <ul className={data ? "lists active" : "lists"}>
          <li>
            <Link to="/Balaji/Ehome">Home</Link>
          </li>
          <li>
            <Link to="/Balaji/Eabout">About As</Link>
          </li>
          <li>
            <Link to="/Balaji/EService">Service</Link>
          </li>
          <li>
            <Link to="/Balaji/EPatientInfo">Patient Info</Link>
          </li>
          <li>
            <Link to="/Balaji/Emakeapp">Make Appointment</Link>
          </li>
          <li>
            <Link to="/Balaji/Econtact">Contact</Link>
          </li>
        </ul>
        <div className="Eibar">
          <button
            onClick={() => {
              setdata(!data);
            }}
          >
            {data ? (
              <i class="fa-sharp fa-solid fa-xmark"></i>
            ) : (
              <i class="fa fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
export { Eheader };
function Efooter() {
  return (
    <>
      <div className="eyemake">
        <h2>
          Ready to Visit <br></br>Make an Appointment
        </h2>
      </div>
      <div className="eyefoot">
        <div className="eyefooter">
          <div className="eyeservice">
            <ul>
              <h4>SERVICES</h4>
              <li>Glaucoma</li>
              <li>Cataract Surgery</li>
              <li>Ophthalmology</li>
              <li>Diabetic Eye Care</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>ADDRESS</h4>
              <li>BalajiEye Foundation,</li>
              <li>80/2 Cutcherry Street,</li>
              <li>Gobichettipalayam,</li>
              <li>Erode.</li>
            </ul>
          </div>
          <div className="eyetime">
            <ul>
              <h4>TIMINGS</h4>
              <li>Mon-Sat - 9.30AM - 8PM</li>
              <li>Sun - 10AM - 1PM</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>LOCATION & CONTACT</h4>
              <h5>EMAIL</h5>
              <li>1drlajibacure@gmail.com</li>
              <br></br>
              <h5>PHONE</h5>
              <li>+91 9688515552</li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <div className="eyebalajicopy">
            <p>
              Copyright © 2020 Developed by
              <span> Kitkat Software Technologies</span>
            </p>
          </div>
          <div className="eyebalajiicon">
            <li>
              <Link to="/balaji">
                <img
                  src="http://drlajibaclinic.1drlajibacure.com/img/lo.png"
                  width={120}
                  height={70}
                ></img>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
export { Efooter };
