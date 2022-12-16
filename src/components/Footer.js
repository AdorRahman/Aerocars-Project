import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";
import aerocars from "../img/aerocars.svg";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadline = useRef(null);

  useGsapFooterHeadline(footerHeadline, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <img
        className="logo-footer"
        ref={footerHeadline}
        src={aerocars}
        alt="aerocars"
        height="55px"
      />
      <p>
        © {new Date().getFullYear()} All Rights Reserved | Powered by Aerocars
        Ltd. USA
      </p>
    </section>
  );
};

export default Footer;
