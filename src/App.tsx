import "./App.css";
import Account from "./sections/Account";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";

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
      <div id="brands">
        <div>section 1 - brands I've worked with</div>
      </div>
      <div id="work">
        <div>section 1 - most popular sample work</div>
      </div>
      <div id="contact">
        <div>
          contact me - linkedin, email, instagram, tiktok and a contact form
        </div>
      </div>
    </>
  );
}

export default App;
