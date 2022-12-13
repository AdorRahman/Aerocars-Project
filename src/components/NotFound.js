import { useRef } from "react";
import { useGsapNotFoundHeadline, useGsapNotFoundImg } from "../hooks/gsap";

const NotFound = () => {
  const leftHeadlineRef = useRef(null);
  const rightHeadlineRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useGsapNotFoundHeadline(leftHeadlineRef);
  useGsapNotFoundHeadline(rightHeadlineRef, "100vw");
  useGsapNotFoundImg(leftImgRef);
  useGsapNotFoundImg(rightImgRef);

  return (
    <section className="not-found wrapper">
      <div className="headline-1" ref={leftHeadlineRef}>
        Sorry, we couldn't
      </div>
      <div className="img-1" ref={rightImgRef}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-4064375-3363936.png"
          alt=""
        />
      </div>
      <div className="img-2" ref={leftImgRef}>
        <img
          src="https://images.all-free-download.com/images/graphiclarge/error_404_page_not_found_6845510.jpg"
          alt=""
        />
      </div>
      <div className="headline-2" ref={rightHeadlineRef}>
        Find that page
      </div>
    </section>
  );
};

export default NotFound;
