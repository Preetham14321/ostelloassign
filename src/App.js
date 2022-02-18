import Contactus from "./component/Contactus";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import JobApplyForm from "./component/JobApplyForm";
function App() {
  return (
    <>
      {/* <Contactus /> */}
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Contactus />} />
          <Route path={"/aboutus"} element={<AboutUs />} />
          <Route path={"/career"} element={<Career />} />
          <Route path={"/career/join-us"} element={<JobApplyForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
