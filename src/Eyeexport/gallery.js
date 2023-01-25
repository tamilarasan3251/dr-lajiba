import { Exportfooter, Exportheader } from "../eye";
import "./gallery.css";
function Gallery() {
  return (
    <>
      <Exportheader />
      <div className="exportgallery">
        <div className="gallery">
          <img
            src="http://drlajibaenterprises.1drlajibacure.com/gallery/big_1.jpg"
            alt="img"
            width={600}
            height={600}
          ></img>
        </div>
        <div className="gallery">
          <img
            src="http://drlajibaenterprises.1drlajibacure.com/gallery/big_mal1.jpg"
            alt="img"
            width={600}
            height={600}
          ></img>
        </div>
        <div className="gallery">
          <img
            src="http://drlajibaenterprises.1drlajibacure.com/gallery/big_bni1.jpg"
            alt="img"
            width={600}
            height={600}
          ></img>
        </div>
        <div className="gallery">
          <img
            src="http://drlajibaenterprises.1drlajibacure.com/gallery/big_vip1.jpg"
            alt="img"
            width={600}
            height={600}
          ></img>
        </div>
      </div>
      <Exportfooter />
    </>
  );
}
export { Gallery };
