import { Exportfooter, Exportheader } from "../eye";
import "./gallery.css";
import img1 from "./laa gallery/big_1.jpg";
import img2 from "./laa gallery/big_bni1.jpg";
import img3 from "./laa gallery/big_mal1.jpg";
import img4 from "./laa gallery/big_vip1.jpg";
function Gallery() {
  return (
    <>
      <Exportheader />
      <div className="exportgallery">
        <div className="gallery">
          <img src={img1} alt="img" width={600} height={600}></img>
        </div>
        <div className="gallery">
          <img src={img2} alt="img" width={600} height={600}></img>
        </div>
        <div className="gallery">
          <img src={img3} alt="img" width={600} height={600}></img>
        </div>
        <div className="gallery">
          <img src={img4} alt="img" width={600} height={600}></img>
        </div>
      </div>
      <Exportfooter />
    </>
  );
}
export { Gallery };
