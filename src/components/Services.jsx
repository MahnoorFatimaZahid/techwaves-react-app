import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service2, service3 } from "../assets";

const Services = () => {
  return (
    <Section id={"knowmore"}>
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] h-[18rem] border border-n-1/10 rounded-3xl overflow-hidden ">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robbot"
                  width={630}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className=" p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI Solution For Your Business</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  modi ipsa soluta. Similique iste consequuntur nam debitis
                  pariatur, odit amet.
                </p>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  alt="scary robot"
                  className="object-cover"
                  width={520}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
