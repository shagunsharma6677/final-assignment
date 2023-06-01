import React, { useEffect } from "react";
import img from "../../../public/5494.jpg";
import Header from "../Header/Header";
import { Button, Heading } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Reveal from "../Reveal/Reveal";
import PreLoader from "../PreLoader/PreLoader";

const Hero = () => {
  return (
    <>
      <PreLoader />
      <section class=" hero body-font">
        <div className="bg-img">
          <Header />
          <div class="container  flex flex-wrap  pl-24 items-center">
            <div class="md:w-1/2   md:py-8 mb-10 md:mb-0 pb-10">
              <Button
                mb={"20px"}
                className="btn"
                colorScheme="red"
                borderRadius={"3xl"}
              >
                Start Your healthy Lifestyle
              </Button>

              <Heading fontSize={"3.5vw"} lineHeight={"3.8vw"} color={"black"}>
                BEGIN YOUR TRANSFORMATION TODAY
              </Heading>
              <p class="leading-5   max-w-sm m-4 ml-0 text-base">
                Locavore cardigan small batch roof party blue bottle blog
                meggings sartorial jean shorts kickstarter migas sriracha
                church-key synth succulents. Actually taiyaki neutra, distillery
                gastropub pok pok ugh.
              </p>
              <Button
                border={"1px solid grey"}
                // color={"grey"}
                // colorScheme={"transparent"}
                borderRadius={"3xl"}
                className=" hero-btn"
              >
                Show More
                <ArrowRightIcon marginLeft={"3"} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
