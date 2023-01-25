import { Efooter, Eheader } from "../balaji";
import "./Econtact.css";
function Econtact() {
  return (
    <>
      <Eheader />

      <div className="Econtactmap">
        <iframe
          width="900"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=%09DR%20Lajiba%20Aayush%20Polyclinic,%2080/2%20Cutcherry%20Street,Sathy%20Main%20Road,%20Gobichettipalayam,%20Erode.&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

      <Efooter />
    </>
  );
}
export { Econtact };
