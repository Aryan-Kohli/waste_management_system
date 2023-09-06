import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Importance from "./components/Importance";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Importance />
      <Blogs />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
