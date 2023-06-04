import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MySkills from "./components/MySkills/MySkills";
import MyProjects from "./components/MyProjects/MyProjects";
import Hire from "./components/Hire/Hire";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MySkills/>
      <MyProjects/>
      <Hire/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
