import { Link } from "react-router-dom";
import { asset_registry } from "../asset-registry";
import metadata from "./metadata.json"
export default function About(){
  return (
    <>
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo"><img src={asset_registry.__fetchAssetPath("asset://images/2")} data-background />NEXT</Link>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__links">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/tech" className="navbar__links">About</Link>
          </li>
          <li className="navbar__item">
            <a href="/#services" className="navbar__links">Services</a>
          </li>
          <li className="navbar__btn">
            <Link to="/sign-up" className="button">{metadata.call_to_action}</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <h1>ABOUT SECTION</h1>
          <p>Learn more about us!</p>
          <button className="main__btn"><Link to="#">Get Started</Link></button>
        </div>
        <div className="main__img-container">
          <img id="main__img" src={asset_registry.__fetchAssetPath("asset://images/2")} />
        </div>
      </div>
    </div>
    </>
  )
}