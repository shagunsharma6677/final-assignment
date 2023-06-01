"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header/Header";
import AboutHero from "@/components/AboutHero/AboutHero";
import { Box, Button, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";
// import Carousel from "react-grid-carousel";
import img from "../../../public/car2.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="about">
        <AboutHero />

        <div className="min-h-screen py-20 text-center facility-sec">
          <div className="facility-head">
            <Heading fontSize={"5xl"}>FACILITIES AND OFFERINGS</Heading>
            <Box
              maxW={"80%"}
              fontSize={"lg"}
              m={"auto"}
              color="rgba(105, 105, 105, 1)"
            >
              “Whether you are in sports or any other field, excellence is what
              you must always strive for. Heartfulness teaches you that in how
              they transformed this place which was as barren as it can get,” -
              Daaji
            </Box>
          </div>

          <div className="facility-grid-cont ">
            <div className="mt-10 fac-card-cont">
              <div>
                <div class="grid-card ">
                  <div class="grid-card2 div-1">Image</div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Lorem, ipsum dolor.
              </div>
            </div>

            <div className="mt-40 fac-card-cont">
              <div
                style={{
                  position: "relative",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Lorem, ipsum dolor.
              </div>
              <div>
                <div class="grid-card ">
                  <div class="grid-card2 div-2"> Image</div>
                </div>
              </div>
            </div>

            <div className="mt-10 fac-card-cont">
              <div>
                <div class="grid-card ">
                  <div class="grid-card2 div-3">Image</div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Lorem, ipsum dolor.
              </div>
            </div>

            <div className="mt-40 fac-card-cont">
              <div
                style={{
                  position: "relative",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Lorem, ipsum dolor.
              </div>
              <div>
                <div class="grid-card ">
                  <div class="grid-card2 div-4">Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JOIN US  */}
        <div className="text-center bg-orange-600 abt-join abt py-28">
          <Heading color={"white"} fontSize={"5xl"}>
            JOIN US AT HISC
          </Heading>
          <Box maxW={"80%"} fontSize={"lg"} m={"auto"} color="white">
            Be a part of the Heartfulness International Sports Center community,
            where sports and holistic well-being merge. Explore our facilities,
            experience the joy of sports, and unlock your potential. Let's
            nurture future champions and empower youth through the
            transformative power of sports. Contact us today or visit our
            facility. We look forward to welcoming you to HISC!
          </Box>

          <Button>SIGN UP NOW</Button>
        </div>

      

        <Footer />
      </section>
    </>
  );
};

export default About;
