import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./eye.css";
function Exportheader() {
  const [data, setdata] = useState(false);
  return (
    <>
      <div className="eyeexport">
        <div className="exportlogo">
          <li>
            <Link to="/">
              <img
                src="http://drlajibaclinic.1drlajibacure.com/img/lo.png"
                width={120}
                height={80}
              ></img>
            </Link>
          </li>
        </div>

        <ul className={data ? "  export-list active" : "export-list"}>
          <li>
            <Link to="/eye/home">Home</Link>
          </li>
          <li>
            <Link to="/eye/About">About</Link>
          </li>
          <li>
            <Link to="/eye/Product">Product</Link>
          </li>
          <li>
            <Link to="/eye/Gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/eye/MediaRelease">Media Release</Link>
          </li>
          <li>
            <Link to="/eye/Contact">Contact</Link>
          </li>
        </ul>
        <div className="exporticon">
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
export { Exportheader };
function EyeExport() {
  return (
    <>
      <Exportheader />
      <div className="exportbanner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="	http://drlajibaenterprises.1drlajibacure.com/images/bniii.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="	http://drlajibaenterprises.1drlajibacure.com/images/bniii.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="exportwelcome">
        <h2>WELCOME TO " DR.LAJIBA - WORLD OF WELL BEING".</h2>
      </div>
      <div>
        <p className="exportpera">
          Dr.lajiba - It's Me A "Genie" Welcome You All To The World Of Well
          Being, Where The Health Is Maintained Well With Pure Herbal Medicated
          Products Without Side Effects In The Forth Coming Future World . Here
          I Promise You All That , The Health Care Is Being<br></br> Taken Care
          Of With My Herbal Medicine Ranges Like,
        </p>
      </div>
      <div className="exportlist">
        <ul>
          <li>Cold And head Ache Pain Balm. (10gm,25gm)</li>
          <li>Joint And Muscle Pain Reliever. (50 ml Liniment)</li>
          <li>Anti Dandruff Shampoo. (Coco Fresh Shampoo)</li>
          <li>Anti Hair Fall Hair Oil.(Hair Fresh Hair Oil)</li>
          <li>Anti Fungal/ Anti Scabies & eodorant Soap. (Skin Fresh Soap).</li>
        </ul>
      </div>
      <Exportfooter />
    </>
  );
}
export { EyeExport };
function Exportfooter() {
  return (
    <>
      <div className="exportfoot">
        <div className="exportfooter">
          <div className="exabout">
            <h3>About as</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="extime">
            <h3>TIMINGS</h3>
            <p>
              Mon-Sat 9.30AM - 8PM <br></br>Sun - 10AM - 1PM
            </p>
          </div>
          <div className="exaddress">
            <h3>ADDRESS</h3>
            <i class="fa-solid fa-location-dot"></i>
            <p>
              DR Lajiba Aayush Polyclinic, 80/2 Cutcherry Street,Sathy Main
              Road, Gobichettipalayam, Erode.
            </p>
          </div>
          <div className="excontact">
            <h3>CONTACT AS</h3>
            <h5>
              <i class="fa-solid fa-phone"></i>
              +91 9842515552<br></br> +91 9976615552
            </h5>
            <i class="fa-regular fa-envelope"></i>
            <h5>1drlajibacure@gmail.com</h5>
          </div>
        </div>
        <div className="exicons">
          <i class=" fa fa fa-brands fa-facebook-f"></i>

          <i class="fa-brands fa-twitter"></i>

          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div className="excopyright">
          <p>
            Copyright ©2022 All rights reserved | This template is made with by
            <i class="fa-solid fa-heart"></i>
            Colorlib
          </p>
        </div>
      </div>
    </>
  );
}
export { Exportfooter };
