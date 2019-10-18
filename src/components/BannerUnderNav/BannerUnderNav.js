import React from "react";
import Banner from './banner.jpg';
import "./BannerUnderNav.css";

const backgroundHomepage = {
  title: "Page éditoriale",
  urlLink: "https://www.transilien.com/fr/page-editoriale/imagine-r",
  urlImg: Banner
};

const BannerUnderNav = () => {
  return (
  <header role="banner" className="row bannerHomepage">
  <div className="col-lg-12">
      <a href={backgroundHomepage.urlLink} title={backgroundHomepage.title}>
        <img className="img-fluid" src={backgroundHomepage.urlImg} alt={backgroundHomepage.title} />
      </a>
  </div>
  </header>
  );
};

export default BannerUnderNav;