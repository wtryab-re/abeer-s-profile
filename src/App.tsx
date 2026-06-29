import "./App.css";
import Account from "./sections/Account";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Brands from "./sections/Brands";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const sections = ["home", "overview", "brands", "work", "contact"];
  return (
    <>
      <Header></Header>
      <div id="home">
        <Introduction></Introduction>
      </div>
      <hr className="border-t mx-10 border-gray-300" />
      <div id="overview">
        <Account></Account>
      </div>

      <hr className="border-t mx-10 border-gray-300" />
      <div id="brands">
        <Brands></Brands>
      </div>
      <hr className="border-t mx-10 border-gray-300" />
      <div id="work">
        <Work></Work>
      </div>
      <hr className="border-t mx-10 border-gray-300" />
      <div id="contact">
        <Contact></Contact>
      </div>
      <div id="contact">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
