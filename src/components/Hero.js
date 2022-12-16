import React, { useRef } from "react";
import {
  useGsapShtterUp,
  useGsapPhotoDropping,
  useGsapPhotoLevitate,
} from "../hooks/gsap";

const Hero = () => {
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const heroRef = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShtterUp(shutter1, 1.0, heroRef);
  useGsapShtterUp(shutter2, 1.3, heroRef);
  useGsapPhotoDropping(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);
  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="aerodynamics">
        aerodynamic<span ref={shutter1}></span>
      </h1>
      <h1 className="everywhere">
        {" "}
        cars desgin<span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo photo-hero one"
          style={{
            backgroundImage:
              'url("https://www.xautoworld.com/wp-content/uploads/2021/06/Rimac-Efficient-Aerodynamics.jpg")',
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo photo-hero two"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/168257494/photo/prototype-white-vehicle-located-in-a-wind-tunnel.jpg?s=612x612&w=0&k=20&c=HZR4ihn_FkIAhh97Ym7LTNHfqpy8rJeQNllFtS5Nq88=")',
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo photo-hero three"
          style={{
            backgroundImage:
              'url("https://t3.ftcdn.net/jpg/03/10/55/66/360_F_310556686_yOLtG2Us3PdgeobcwzSut3ONiZJzATby.jpg")',
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo photo-hero four"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/123019189/photo/wind-tunnel.jpg?s=612x612&w=0&k=20&c=8cWO2hwFOqVTrbKnv6VJn9Fodai_LZZ5Q_x9yWNoZIY=")',
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo photo-hero five"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/483557615/photo/wind-tunnel.jpg?s=612x612&w=0&k=20&c=KNlXH6W5bEwSJ8jC1GX6ZJ23uCwM6xjhIyaDTeLjRME=")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
