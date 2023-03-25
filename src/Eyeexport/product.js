import { Exportfooter, Exportheader } from "../eye";
import "./product.css";
import img1 from "./laa product/s1.jpg";
import img2 from "./laa product/s3.jpg";
import img3 from "./laa product/s4.jpg";
function Product() {
  return (
    <>
      <Exportheader />
      <div className="exportproduct">
        <div className="">
          <img src={img1} alt="img" width={250} height={500}></img>
          <h5>ALOEVERA SHAMPOO</h5>
          <span>
            <b>Rs 180</b>
          </span>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="">
          <img src={img2} alt="img" width={250} height={500}></img>
          <h5>BLACK SHAMPOO</h5>
          <span>
            <b>Rs 180</b>
          </span>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="">
          <img src={img2} alt="img" width={250} height={500}></img>
          <h5>HAIR FRESH SHAMPOO</h5>
          <span>
            <b>Rs 180</b>
          </span>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="">
          <img src={img3} alt="img" width={250} height={500}></img>
          <h5>COCUNUT FRESH SHAMPOO</h5>
          <span>
            <b>Rs 180</b>
          </span>
          <br></br>
          <button>Buy Now</button>
        </div>
      </div>
      <Exportfooter />
    </>
  );
}
export { Product };
