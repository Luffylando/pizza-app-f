import React, { Component } from "react";
import FooterStyle from "./style";
import SVGInline from "react-svg-inline";
import { fb, ins, tw } from "../../assets/icons";
import FooterSection from "../../components/FooterSection";

const Footer = () => {
  var date = new Date();
  var currentYear = date.getFullYear();
  return (
    <FooterStyle>
      <div className="mainSection">
        <div className="titleSection">
          <div className="title">
            <h1>Pizza Place</h1>
          </div>

          <div className="address">
            <p>Tolstojeva 12 </p>
            <p>Belgrade, Serbia</p>
            <p>+381 111 333</p>
            <p>contact@pizza.com</p>
          </div>
        </div>

        <div className="linksSection">
          <FooterSection
            number={"01"}
            mainTitle={"Placeholder"}
            item1={"Placeholder"}
            item2={"Placeholder"}
          />
          <FooterSection
            number={"02"}
            mainTitle={"Placeholder"}
            item1={"Placeholder"}
          />
          <FooterSection
            number={"03"}
            mainTitle={"Placeholder"}
            item1={"Placeholder"}
          />
          <FooterSection
            number={"04"}
            mainTitle={"Placeholder"}
            item1={"Placeholder"}
            item2={"Placeholder"}
          />
        </div>
      </div>
      <div className="privacySection">
        <div className="privacy">
          Pizza place - All Rights Reserved - {currentYear}
        </div>
        <div className="socialIcons">
          <a href="http://facebook.com">
            <SVGInline svg={fb} />
          </a>
          <a href="http://instagram.com">
            <SVGInline svg={ins} />
          </a>
          <a href="http://twitter.com">
            <SVGInline svg={tw} />
          </a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
