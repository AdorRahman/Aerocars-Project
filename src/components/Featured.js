import React from "react";
import { useRef } from "react";
import {
  useGsapfeaturLeftShutterUnveil,
  useGsapfeaturRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftshutterRef = useRef(null);
  const featureRightshutterRef = useRef(null);

  useGsapfeaturLeftShutterUnveil(featureLeftshutterRef, featureRef);
  useGsapfeaturRightShutterUnveil(featureRightshutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="featur-l">
          <span className="features-text">Wind Tunnel</span>
          <img
            src="https://media.istockphoto.com/id/147542205/photo/blue-sports-car-in-a-wind-tunnel.jpg?s=612x612&w=0&k=20&c=G28qStqMyAViIno5E6oq4PdIKGwoqeUeHaV1L13Z1Z0="
            alt=""
          />
          <span
            className="feature-shutter-l"
            ref={featureLeftshutterRef}
          ></span>
        </div>
        <div className="featur-r">
          <span className="features-text">
            Bugatti Centodieci wind tunnel test
          </span>
          <img
            src="https://performancedrive.com.au/wp-content/uploads/2021/09/2021-Bugatti-Centodieci-wind-tunnel-testing.jpg"
            alt=""
          />
          <span
            className="feature-shutter-r"
            ref={featureRightshutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
