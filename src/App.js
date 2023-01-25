import "./App.css";
import { Ahome } from "./Aasushcom/Ahome";
import { Aabout } from "./Aasushcom/Aabout";
import { Acontact } from "./Aasushcom/Acontact";
import { Agallery } from "./Aasushcom/Agallery";
import { Amakeapp } from "./Aasushcom/Amakeapp";
import { Aservice } from "./Aasushcom/Aservice";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Aayush } from "./aayush";
import { Join } from "./link";
import { Balaji } from "./balaji";
import { EyeExport } from "./eye";
import { Ehome } from "./Eye/Ehome";
import { Eabout } from "./Eye/Eabout";
import { Econtact } from "./Eye/Econtact";
import { Epatient } from "./Eye/EPatientInfo";
import { Emakeapp } from "./Eye/Emakeapp";
import { Eservice } from "./Eye/Eservice";
import { Home } from "./Eyeexport/home";
import { About } from "./Eyeexport/about ";
import { Product } from "./Eyeexport/product";
import { Gallery } from "./Eyeexport/gallery";
import { Contact } from "./Eyeexport/contact";
import { MediaRelease } from "./Eyeexport/mediarelease";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/Aayush" element={<Aayush />} />
          <Route path="/Aayush/ahome" element={<Ahome />} />
          <Route path="/Aayush/Aabout" element={<Aabout />} />
          <Route path="/Aayush/contact" element={<Acontact />} />
          <Route path="/Aayush/gallery" element={<Agallery />} />
          <Route path="/Aayush/makeapp" element={<Amakeapp />} />
          <Route path="/Aayush/service" element={<Aservice />} />

          <Route path="/Balaji" element={<Balaji />} />
          <Route path="/Balaji/Ehome" element={<Ehome />} />
          <Route path="/Balaji/Eabout" element={<Eabout />} />
          <Route path="/Balaji/Econtact" element={<Econtact />} />
          <Route path="/Balaji/EPatientInfo" element={<Epatient />} />
          <Route path="/Balaji/Emakeapp" element={<Emakeapp />} />
          <Route path="/Balaji/Eservice" element={<Eservice />} />

          <Route path="/Eye" element={<EyeExport />} />
          <Route path="/Eye/home" element={<Home />} />
          <Route path="/Eye/about" element={<About />} />
          <Route path="/Eye/product" element={<Product />} />
          <Route path="/Eye/gallery" element={<Gallery />} />
          <Route path="/Eye/contact" element={<Contact />} />
          <Route path="/Eye/mediarelease" element={<MediaRelease />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
