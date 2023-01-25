import { Efooter, Eheader } from "../balaji";
import "./Eabout.css";
function Eabout() {
  return (
    <>
      <Eheader />
      <div className="eyeimg">
        <img
          src="https://content.jdmagicbox.com/comp/delhi/48/011pge05948/catalogue/m-k-w-hospital-rajouri-garden-delhi-hospitals-v675i.jpg"
          width="100%"
          height="auto"
        ></img>
      </div>
      <div className="eyeimgcon">
        <div className="eyeimg">
          <img
            src="https://www.davidorf.com/wp-content/uploads/optical-shop-glasses-display-1.jpg"
            height="400px"
          ></img>
        </div>
        <div className="eyecon">
          <p>
            Eye Hospital Is A Multi-Specialty Eye Hospital In The City Committed
            To Delivering High Quality Eye Care, Where Dr Has Worked Untiringly
            To Bring Together State-Of-The-Art Technology And Trained
            Experienced Personnel. Over The Years, Eye Hospital Has Expanded
            Into An Ultra-Modern Facility With A Full Array Of Subspecialty
            Clinics, Well Integrated Diagnostic, Imaging And Laser Systems,
            State-Of-The-Art Operation Theatres, Daycare Recovery Suites,
            Sophisticated Training. With Clinical Expertise And Sophistication
            Of Diagnostic And Treatment Procedures, Eye Hospital Serves The
            Needs Of Its Patients Across A Wide Spectrum Of Eye Disorders
            Related To Cornea, Retina, Pediatric Ophthalmology, Neuro
            Ophthalmology And Diabetic Eye Care. We Carry Out Advanced Eye
            Procedures Like ND-Yag Laser And Cold Phacoemulisification.
          </p>
          <p>
            <ul>
              <h3>We Are Proud Of :</h3>
              <li>Infrastructure</li>
              <li>Our Technologies and Equipments</li>
              <li>Standard Operation Theater</li>
              <li>Our Experienced and Skilled Doctors</li>
            </ul>
          </p>
        </div>
      </div>

      <Efooter />
    </>
  );
}
export { Eabout };
