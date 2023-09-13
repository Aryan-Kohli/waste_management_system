import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RedZone from "./components/RedZone";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";

import Faq from "./components/Faq";
import Maps from "./components/Maps";

import Aboutus from "./components/Aboutus";
import Complaint from "./components/Complaint";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Complaint />
      <Chatbot />
      <RedZone />
      <Maps />
      <Blogs />
      <Aboutus />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
