import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const useGsapShtterUp = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      { height: "100%" },
      {
        height: "0%",
        duration: 0.5,
        ease: Expo.easeIn,
        delay: delay,

        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: Expo.easeIn,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapPhotoDropping = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      { y: "-100vh", scale: 0 },
      {
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.5,
        delay: 2.7,
        ease: Expo.easeInOut,
      }
    );
  });
};

export const useGsapPhotoLevitate = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      { y: 0 },
      {
        y: "-50%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
};

export const useGsapfeaturLeftShutterUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          start: "top center",
          end: "bottom center",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapfeaturRightShutterUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          start: "top center",
          end: "bottom center",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapGatteryImage = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: 0,
        width: 0,
      },
      {
        x: "30%",
        width: "100%",
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGatteryCategory = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGatteryTitle = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "30%",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapFooterHeadline = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "-100%",
      },
      {
        y: 0,
        duration: 1.5,
        delay: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play",
        },
      }
    );
  });
};

export const useGsapNotFoundHeadline = (item, vw = "-100vw") => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: vw,
      },
      {
        x: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

export const useGsapNotFoundImg = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        scale: 0,
        borderRadius: "50%",
      },
      {
        scale: 1,
        borderRadius: 0,
        duration: 4,
        delay: 1,
        ease: "elastic",
      }
    );
  }, []);
};

export const useGsapBlogPhotoDropping = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.7,
        stagger: 0.6,
        delay: 0.7,
        ease: Expo.easeInOut,
      }
    );
  });
};
