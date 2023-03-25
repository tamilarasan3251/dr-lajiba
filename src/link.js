import "./link.css";
import { Link, Outlet } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
function Join() {
  const [data, setdata] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src="http://drlajibaclinic.1drlajibacure.com/img/lo.png"></img>
        </div>
        <ul className={data ? "nav-link active" : "nav-link"}>
          <li>
            <Link to="/aayush">AAYUSH POLYCLINIC</Link>
          </li>
          <li>
            <Link to="/Balaji">BALAJI EYE HOSPITAL</Link>
          </li>
          <li>
            <Link to="/Eye">BALAJI ENTERPRISES & EXPORTS</Link>
          </li>
        </ul>
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
      <div className="banner">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.shankarseyehospital.org/assets/images/banner07.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.lakshmisiddhaclinic.com/wp-content/uploads/2020/05/footer1.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://ambicayurved.com/wp-content/uploads/2021/12/Everything-You-Need-To-Know-About-Ayurveda.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-photo/ayurvedic-anti-bacterial-herbs-neem-lilac-azadirachta-indica-with-oil-bottle-with-mortar-isolated-plain-background-selective-focus_466689-64704.jpg?w=2000"
              alt="fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="foot">
        <div className="footer">
          <div className="website">
            <h2>WEBSITES</h2>
            <div className="line"></div>
            <ul className="weblink">
              <li>
                <Link to="/Aayush">AAYUSH POLYCLINIC</Link>
              </li>
              <li>
                <Link to="/Balaji">BALAJI EYE HOSPITAL</Link>
              </li>
              <li>
                <Link to="/Eye">BALAJI ENTERPRISES & EXPORTS</Link>
              </li>
            </ul>
          </div>
          <div className="address">
            <h2>ADDRESS</h2>
            <div className="line"></div>
            <h4>BalajiEye Foundation, </h4>
            <h4> 80/2 Cutcherry Street,</h4>
            <h4> Gobichettipalayam,</h4>
            <h4> Erode.</h4>
          </div>
          <div className="contact">
            <h2>CONTACT</h2>
            <div className="line"></div>
            <h4>E-MAIL</h4>
            <span>1drlajibacure@gmail.com</span>
            <h4>PHONE</h4>
            <span>9842515552, 9976615552</span>
            <br />
            <span>9688515552(for Balaji Eye Hospital)</span>
          </div>
          <div className="icon">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <i class="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i class="fa-brands fa-whatsapp"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © 2022 Developed by
            <span> Kitkat Software Technologies</span>
          </p>
          <div className="underline"></div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
export { Join };
