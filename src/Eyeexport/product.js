import { Exportfooter, Exportheader } from "../eye";
import "./product.css";
function Product() {
  return (
    <>
      <Exportheader />
      <div className="exportproduct">
        <div className="">
          <img
            src="http://drlajibaenterprises.1drlajibacure.com/images/s1.jpg"
            alt="img"
            width={250}
            height={500}
          ></img>
          <h5>ALOEVERA SHAMPOO</h5>
          <span>
            <b>Rs 180</b>
          </span>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="">
          <img
            src="http://drlajibaenterprises.1drlajibacure.com/images/s1.jpg"
            alt="img"
            width={250}
            height={500}
          ></img>
          <h5>BLACK SHAMPOO</h5>
          <span>
            <b>Rs 180</b>
          </span>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="">
          <img
            src="http://drlajibaenterprises.1drlajibacure.com/images/s3.jpg"
            alt="img"
            width={250}
            height={500}
          ></img>
          <h5>HAIR FRESH SHAMPOO</h5>
          <span>
            <b>Rs 180</b>
          </span>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="">
          <img
            src="	http://drlajibaenterprises.1drlajibacure.com/images/s4.jpg"
            alt="img"
            width={250}
            height={500}
          ></img>
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
