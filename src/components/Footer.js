import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadline = useRef(null);

  useGsapFooterHeadline(footerHeadline, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <img
        ref={footerHeadline}
        src="https://svgshare.com/i/oiq.svg"
        alt="aerocars"
        height="70px"
      />
      <p>
        © {new Date().getFullYear()} All Rights Reserved | Powered by Aerocars
        Ltd. USA
      </p>
    </section>
  );
};

export default Footer;
