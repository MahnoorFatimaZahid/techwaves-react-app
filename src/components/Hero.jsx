import { robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { useRef } from "react";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Content Section */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Examine the Potential of AI Hack with{" "}
            <span className="inline-block relative">Techwaves </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Better data leads to more performant models. Performant models lead
            to faster deployment. Deliver value from your AI investments.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        {/* Robot Image Section */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* Aspect Ratio Container for Robot Image */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* Robot Image */}
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  {" "}
                  {/* ScrollParallax component */}
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} alt="icon" width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem]
                 bottom-[11rem] w-[18rem] xl:flex"
                    title="code Generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>

          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
