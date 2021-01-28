import React from "react";
import "./footer.css";
import FooterCompany from "./footerCompany/footerCompany";
import FooterSocialMedia from "./footerSocialMedia/footerSocialMedia";
import FooterLegal from "./footerLegal/footerLegal";
import FooterBlog from "./footerBlog/footerBlog";
const footer = () => (
  <>
    <div className="footer">
      <FooterCompany />
      <FooterSocialMedia />
      <FooterLegal />
      <FooterBlog />
    </div>
  </>
);

export default footer;
