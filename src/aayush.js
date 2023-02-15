import React, { useState } from "react";
import "./Aayush.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
function Aayush() {
  return (
    <>
      <Header />
      <div className="aabanner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10"
              src="https://www.lakshmisiddhaclinic.com/wp-content/uploads/2020/05/footer1.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-10"
              src="https://www.ayurmade.com/wp-content/uploads/2021/11/Best-Ayurvedic-Doctor-in-Louisville.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10"
              src="https://img.freepik.com/premium-photo/ayurvedic-anti-bacterial-herbs-neem-lilac-azadirachta-indica-with-oil-bottle-with-mortar-isolated-plain-background-selective-focus_466689-64704.jpg?w=2000"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10"
              src="https://ambicayurved.com/wp-content/uploads/2021/12/Everything-You-Need-To-Know-About-Ayurveda.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="testimonals">
        <h1>TESTIMONALS</h1>
      </div>

      <div className="test">
        <div className="pera">
          <p>
            Happy with Doctor friendliness, Explanation of the health issue,
            Treatment satisfaction, Value for money. I consulted Dr.Mini Nair at
            her Ayurveda hospital in Koramangala, Bangalore. The doctor advised
            me Ayurveda medication. I followed properly as per Doctor’s
            suggestion and it worked well for me. Now I am completely exposing
            to Sun and even I tried to be outside the whole full day.
          </p>
        </div>
        <div className="pera">
          <p>
            Hospital doctors get amazing reviews because our patients achieve
            optimal results. We provide concierge medical eye care and treatment
            of complex conditions & increase patient satisfaction with drive
            cost savings for patients.
          </p>
        </div>
        <div className="pera">
          <p>
            Good institution especially for children with autism and behavioural
            disorders. The medical team under Dr. Lajiba are doing a great job.
            They give individual care in all matters. Its a great challenge to
            deal with these type of children with autism and behavioural
            disorders. I appreciate the effort taken by all staff
          </p>
        </div>
      </div>
      <div className="visit">
        <span>Ready to Visit?</span>
        <h2>Make an Appointment</h2>
      </div>
      <Footer />
    </>
  );
}
function Header() {
  const [data, setdata] = useState(false);
  return (
    <>
      <div className="home-nav">
        <div className="Alogo">
          <li>
            <Link to="/">
              <img
                src="http://drlajibaclinic.1drlajibacure.com/img/lo.png"
                width={140}
                height={80}
              ></img>
            </Link>
          </li>
        </div>
        <ul className={data ? "lists active" : "lists"}>
          <li>
            <Link to="/aayush/Ahome">Home</Link>
          </li>
          <li>
            <Link to="/aayush/Aabout">About As</Link>
          </li>
          <li>
            <Link to="/aayush/Service">Service</Link>
          </li>
          <li>
            <Link to="/aayush/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/Aayush/makeapp">Make Appointment</Link>
          </li>
          <li>
            <Link to="/aayush/Contact">Contact</Link>
          </li>
        </ul>
        <div className="ibar">
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
function Footer() {
  return (
    <div className="bottom">
      <div className="down">
        {/* <img src="https://comuti.in/wp-content/uploads/2021/07/footer-bg.png"></img> */}
        <div className="street">
          <p>
            <i class="fa-solid fa-house"></i> ADDRESS
          </p>
          <span>
            DR Lajiba Aayush Polyclinic,
            <br />
            80/2 Cutcherry Street,Santhy Main Road,
            <br />
            Gobichettipalayam,
            <br />
            Erode.
          </span>
          console.log();
        </div>
        <div className="time">
          <p>
            <i class="fa-solid fa-hourglass-start"></i> TIMINGS
          </p>

          <span>Mon-Sat 9.30-8PM</span>
          <br />
          <span>Sun-10AM-1PM</span>
        </div>

        <div className="navigation">
          <span>
            <i class="fa-solid fa-location-dot"></i> LOCATION
          </span>
          <p>Erode</p>
        </div>
        <div className="phone">
          <p>CONTACT</p>

          <span>
            <i class="fa-solid fa-phone"></i> PHONE
          </span>
          <span>+91 9842515552</span>
          <br></br>
          <span>+91 9976615552</span>
          <br></br>

          <span>
            <i class="fa-solid fa-envelospane"></i> EMAIL
          </span>
          <br></br>
          <span>1drlajibacure@gmail.com</span>
        </div>
      </div>
      <div className="ayushcopyright">
        <p>
          Copyright © 2022 Developed by
          <span> Kitkat Software Technologies</span>
        </p>
      </div>
    </div>
  );
}
export { Aayush, Footer, Header };
