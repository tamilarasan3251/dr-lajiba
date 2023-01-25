import { Header } from "../aayush";
import { Footer } from "../aayush";
import "./Acontact.css";
function Acontact() {
  return (
    <>
      <Header />
      <div className="Ayushmap">
        <iframe
          width="900"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=%09DR%20Lajiba%20Aayush%20Polyclinic,%2080/2%20Cutcherry%20Street,Sathy%20Main%20Road,%20Gobichettipalayam,%20Erode.&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <div className="acontact">
        <div className="aaddress">
          <h2>ADDRESS</h2>
          <span>
            DR Lajiba Aayush Polyclinic,
            <br />
            80/2 Cutcherry Street,Santhy Main Road,
            <br />
            Gobichettipalayam,
            <br />
            Erode.
          </span>
        </div>
        <div className="acontactno">
          <h2>Contact No</h2>
          <span>+91 9842515552</span>
          <br></br>
          <span>+91 9976615552</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Acontact };
