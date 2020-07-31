import React from "react";

// styles
import "../../scss/Footer.scss";
import Logo from "../Logo";
import Copyright from "../SVGs/Copyright";
import Twitter from "../SVGs/Twitter";
import Facebook from "../SVGs/Facebook";
import Google from "../SVGs/Google";
import Instalgram from "../SVGs/Instalgram";

const Footer = () => {
  return (
    <div className="footer">
      <div div className="footer__content-one">
        <div div className="footer__content-one__lists">
          <ul>
            <li>
              <h4>Store</h4>
            </li>
            <li>Catalog</li>
            <li>Popular</li>
            <li>Features</li>
          </ul>
          <ul>
            <li>
              <h4>About</h4>
            </li>
            <li>Catalog</li>
            <li>Popular</li>
            <li>Features</li>
          </ul>
          <ul>
            <li>
              <h4>Catalog</h4>
            </li>
            <li>Catalog</li>
            <li>Popular</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <Logo />
          <p>Your music career success partner</p>
        </div>
      </div>
      <div div className="footer__content-two">
        <p>
          <Copyright />
          <span>2018. All rights reserved</span>
        </p>
        <div>
          <Twitter />
          <Facebook />
          <Google />
          <Instalgram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
