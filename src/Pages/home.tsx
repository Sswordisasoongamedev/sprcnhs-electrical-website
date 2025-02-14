import { Link, Outlet } from "react-router-dom";
import { asset_registry } from "../asset-registry"
import metadata from "./metadata.json";
import { useState } from "react";
export default function Home(){
    const img_url_1 = asset_registry.__fetchAssetPath("asset://images/1");
    const img_url_2 = asset_registry.__fetchAssetPath("asset://images/2");
    const img_url_3 = asset_registry.__fetchAssetPath("asset://images/3");
    const img_url_4 = asset_registry.__fetchAssetPath("asset://images/4");
    const [navIsActive,setNavbarState] = useState(false);
    return (
    <>
      {/** Navbar Section */}
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo"><img src={img_url_2} alt="LOGO" data-background/>{metadata.company_title}</Link>
        <div className={`navbar__toggle${navIsActive ? "is-active" : ""}`} id="mobile-menu" onClick={(_evt)=>{
          console.log("Clicked!");
          setNavbarState(!navIsActive);
        }}>
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar__menu${navIsActive ? " active" : ""}`}>
          <li className="navbar__item">
            <Link to="/" className="navbar__links">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/tech" className="navbar__links">About</Link>
          </li>
          <li className="navbar__item">
            <a href="#services" className="navbar__links">Services</a>
          </li>
          <li className="navbar__btn"><Link to="/" className="button">{metadata.call_to_action}</Link></li>
        </ul>
      </div>
    </nav>

    {/** Hero Section */}
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <h1>{metadata.main_content_header}</h1>
          <p></p>
          <button className="main__btn"><Link to="#">{metadata.call_to_action}</Link></button>
        </div>
        <div className="main__img--container">
          <img id="main__img" src={img_url_1} />
        </div>
      </div>
    </div>

    {/** Services Section */}
    <div className="services" id="services">
      <h1>See what the hype is about</h1>
      <div className="services__container">
        <div className="services__card" style={{
          backgroundImage:`linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(17, 17, 17, 0.6) 100%),url(\"${img_url_3}\")`
        }}>
          <h2>Experience Bliss</h2>
          <p>Improved Electrical technology</p>
          <button>{metadata.call_to_action}</button>
        </div>
        <div className="services__card" style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(17, 17, 17, 0.9) 100%),url(\"${img_url_4}\")`
        }}>
          <h2>Are you Ready?</h2>
          <p>Take the leap</p>
          <button>{metadata.call_to_action}</button>
        </div>
      </div>
    </div>

    {/** Footer Section */}
    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>About Us</h2>
            <Link to="/sign__up">How it works</Link> <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link> <Link to="/">Investments</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer__link--items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link> <Link to="/">Support</Link>
            <Link to="/">Destinations</Link> <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link> <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link> <Link to="/">Influencer</Link>
          </div>
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link> <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link> <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media--wrap">
          {/**<div className="footer__logo">
            <Link to="/" id="footer__logo">{metadata.company_title}</Link>
          </div>*/}
          <p className="website__rights">© {metadata.company_title} {metadata.copyright_year}. All rights reserved</p>
          <div className="social__icons">
            <Link
              className="social__icon--link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              className="social__icon--link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social__icon--link"
              to="//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social__icon--link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social__icon--link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Outlet/>
    </>
  )
}