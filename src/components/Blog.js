import React, { useRef } from "react";
import { useGsapBlogPhotoDropping } from "../hooks/gsap";

const Blog = () => {
  const blogImg1Ref = useRef(null);
  const blogImg2Ref = useRef(null);
  const blogImg3Ref = useRef(null);
  const blogImg4Ref = useRef(null);
  const blogImg5Ref = useRef(null);
  const blogImg6Ref = useRef(null);
  const blogImg7Ref = useRef(null);

  const BlogImgArr = [
    blogImg1Ref,
    blogImg2Ref,
    blogImg3Ref,
    blogImg4Ref,
    blogImg5Ref,
    blogImg6Ref,
    blogImg7Ref,
  ];
  useGsapBlogPhotoDropping(BlogImgArr);

  return (
    <section className="blog wrapper">
      <h2 className="section-title">Blog</h2>
      <div className="blog-area ">
        <div className="blog-image-1  photo" ref={blogImg1Ref}>
          <div className="flip">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1616790037598-2a0b24a1964a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)",
              }}
            >
              {" "}
              <span class="text-shadow">Dec 13, 2022</span>
              <h1 class="text-shadow">An unexpected modification</h1>
            </div>
            <div class="back">
              <h1>An unexpected modification</h1>
              <p>
                One of the most exciting aspects about making car modifications
                is hitting the road and finding out how the car drives after the
                performance mods have been made. Recently, after fitting new
                intercooler plumbing, I did just this – but something rather
                unexpected happened...
              </p>
            </div>
          </div>
        </div>
        <div className="blog-image-2  photo" ref={blogImg2Ref}>
          <div className="flip">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(https://www.environmentalengineering.org.uk/wp-content/uploads/2018/12/Wind-tunnel-testing-at-the-Mercedes-Sindelfingen-test-facility.jpg)",
              }}
            >
              <span class="text-shadow">Dec 13, 2022</span>
              <h1 class="text-shadow">New aero</h1>
            </div>
            <div class="back">
              <h1>New aero</h1>
              <p>
                Automotive aerodynamics keep changing. Recently I read a paper
                on the development of some late model Audis. Much of the
                rationale behind the aero development was as you’d expect –
                minimising flow separation, keeping the area of the wake low,
                using a smooth underfloor – stuff like that...
              </p>
            </div>
          </div>
        </div>
        <div className="blog-image-3  photo" ref={blogImg3Ref}>
          <div className="flip">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/10553202/pexels-photo-10553202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            >
              <span class="text-shadow">Dec 13, 2022</span>
              <h1 class="text-shadow">Features Of Race Cars</h1>
            </div>
            <div class="back">
              <h1>Features Of Race Cars</h1>
              <p>
                A leading edge on the front of the car, relatively parallel to
                the ground, which attempts to keep high pressure air on top of
                the car, rather than flowing underneath it...
              </p>
            </div>
          </div>
        </div>
        <div className="blog-image-4  photo" ref={blogImg4Ref}>
          <div className="flip">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1530906358829-e84b2769270f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
              }}
            >
              <span class="text-shadow">Dec 13, 2022</span>
              <h1 class="text-shadow">COUNTERING DRAG AND LIFT FORCES</h1>
            </div>
            <div class="back">
              <h1>COUNTERING DRAG AND LIFT FORCES</h1>
              <p>
                Car aerodynamics are usually more focused on sports cars owing
                to their high performance and fast speed. However, there are
                many pros and cons of daily driving a sports car...
              </p>
            </div>
          </div>
        </div>
        <div className="blog-image-5  photo" ref={blogImg5Ref}>
          <div className="flip">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/9113865/pexels-photo-9113865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            >
              <span class="text-shadow">Dec 13, 2022</span>
              <h1 class="text-shadow">DRAG FORMULA</h1>
            </div>
            <div class="back">
              <h1>DRAG FORMULA</h1>
              <p>
                Drag is basically the opposite force generated by a car moving
                across the air. As air is still a medium, a car speeding through
                the air will face resistance or in other words friction...
              </p>
            </div>
          </div>
        </div>
        <div className="blog-image-6  photo" ref={blogImg6Ref}>
          <div className="flip">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              }}
            >
              <span class="text-shadow">Dec 13, 2022</span>
              <h1 class="text-shadow">Seeing Buzz Aldrin</h1>
            </div>
            <div class="back">
              <h1>Seeing Buzz Aldrin</h1>
              <p>
                The evening drew to a close, but not before some questions from
                the crowd. Buzz again tended to ignore the questions and just
                say whatever he liked, but the questions were sufficiently open
                that he could do that and get away with it. He leapt to his feet
                and prowled the stage, gesticulating and motivating...
              </p>
            </div>
          </div>
        </div>
        <div className="blog-image-7  photo" ref={blogImg7Ref}>
          <div className="flip">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(https://i.ytimg.com/vi/wP9xxEQAUPQ/maxresdefault.jpg",
              }}
            >
              <span class="text-shadow">Dec 13, 2022</span>
              <h1 class="text-shadow">New book on car aerodynamics</h1>
            </div>
            <div class="back">
              <h1>New book on car aerodynamics</h1>
              <p>
                After a gap of quite a few years, today my most recent book was
                published. It’s called the Amateur Car Aerodynamics Sourcebook.
                I think it’s got lots to interest people who wonder how air
                flows over, under and through their road cars...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
