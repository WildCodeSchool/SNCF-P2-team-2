import React from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import Navbar from "./components/Navbar/Navbar";
import BannerUnderNav from './components/BannerUnderNav/BannerUnderNav';


function App() {
  return (
    <div>
      <Navbar />
      <BannerUnderNav />
      <main role="main" class="mastcontainer">
      </main>
    </div>
  
  );
}

export default App;
