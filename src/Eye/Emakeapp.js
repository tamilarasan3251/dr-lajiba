import { Efooter, Eheader } from "../balaji";
import "./Emakeapp.css";
function Emakeapp() {
  return (
    <>
      <Eheader />

      <div className="eyeform">
        <form>
          <label>NAME:</label>
          <input type="text" placeholder="Enter name"></input>
          <br></br>
          <br></br>
          <label>EMAIL:</label>
          <input type="email" placeholder="Enter Email"></input>
          <br></br>
          <br></br>
          <lable>M NO:</lable>
          <input type="number" placeholder="Enter mobile no"></input>
          <br></br> <br></br>
          <label>DATE:</label>
          <input type="date" placeholder="Enter date"></input>
          <br></br>
          <br></br>
          <label>TIME:</label>
          <input type="text" placeholder="Set time"></input>
          <br></br>
          <br></br>
          <label>MASSAGE:</label>
          <textarea placeholder="Some massage"></textarea>
        </form>
      </div>

      <Efooter />
    </>
  );
}
export { Emakeapp };
