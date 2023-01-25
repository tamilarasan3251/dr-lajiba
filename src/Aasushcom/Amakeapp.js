import { Header } from "../aayush";
import { Footer } from "../aayush";
import "./Amakeapp.css";
function Amakeapp() {
  return (
    <>
      <Header />

      <div className="eyeform">
        <form>
          <label id="lable">NAME:</label>
          <input type="text" id="input" placeholder="Enter name"></input>
          <br></br>
          <br></br>
          <label id="lable">EMAIL:</label>
          <input type="email" id="input" placeholder="Enter Email"></input>
          <br></br>
          <br></br>
          <lable id="lable">M NO:</lable>
          <input type="number" id="input" placeholder="Enter mobile no"></input>
          <br></br> <br></br>
          <label id="lable"> DATE-:</label>
          <input type="date" id="input" placeholder="Enter date"></input>
          <br></br>
          <br></br>
          <label id="lable">TIME:</label>
          <input type="text" id="input" placeholder="Set time"></input>
          <br></br>
          <br></br>
          <label id="lable">MASSAGE:</label>
          <textarea placeholder="Some massage"></textarea>
        </form>
      </div>

      <Footer />
    </>
  );
}
export { Amakeapp };
