import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import User from "./routes/User";
import Salon from "./routes/Salon";
import Contact from "./routes/Contact";
import TermsAndCondition from "./routes/TermsAndCondition";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import CencellationAndRefund from "./routes/CencellationAndRefund";
import AOS from "aos";
import About from "./routes/About";

AOS.init();

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/partner-with-us" element={<Salon />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/cancellation-refund"
          element={<CencellationAndRefund />}
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
