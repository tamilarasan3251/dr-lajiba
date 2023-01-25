import { Header } from "../aayush";
import "./Aabout.css";
import { Footer } from "../aayush";
function Aabout() {
  return (
    <>
      <Header />
      <div className="banneri">
        <img src="https://goodspaguide.co.uk/images/uploads/Features/Resized_for_new_site_/Ayurvedic_spa_treatments.jpg"></img>
      </div>
      <div className="ayushimgwelcome">
        <div className="ayushimg">
          <img
            src="http://drlajibaclinic.1drlajibacure.com/img/ec.jpg"
            alt="img"
          ></img>
        </div>
        <div className="ayushwelcome">
          <h2>welcome to Dr lajiba</h2>
        </div>
      </div>
      <div className="ayushaboutimg">
        <img
          src="http://drlajibaclinic.1drlajibacure.com/img/3.jpg"
          alt="img"
          width={400}
          height={400}
        ></img>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgth2hvFrTBLYCCdFZhD7suGdK7GLzdqV5wmiBniwLAsj73MDzA75QZYBY6MsfjQIE7Y&usqp=CAU"
          alt="img"
          width={400}
          height={400}
        ></img>
        <img
          src="https://cdn.shopify.com/s/files/1/0035/8413/1145/articles/Untitled_design_2_777d971c-4320-4f14-acda-547a8c781788_1400x.progressive.png.jpg?v=1657011913"
          alt="img"
          width={400}
          height={400}
        ></img>
      </div>

      <Footer />
    </>
  );
}
export { Aabout };
