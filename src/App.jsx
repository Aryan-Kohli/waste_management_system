import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";

import Faq from "./components/Faq";
import Importance from "./components/Importance";
import Aboutus from "./components/Aboutus";
import Complaint from "./components/Complaint";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Complaint />

      <Blogs />
      <Aboutus />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
