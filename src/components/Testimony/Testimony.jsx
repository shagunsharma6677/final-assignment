import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Testimony = () => {
  return (
    <>
      <section class="text-zinc-100 testimony body-font ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap p-10 bg-zinc-950 rounded-2xl -m-4">
            <div class="lg:w-1/3 lg:mb-0  mb-6 p-4">
              <div class="h-full text-center">
                {/* <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"> */}
                <FaEnvelopeOpenText
                  fontSize={"30px"}
                  className="mt-3 mb-3 ml-auto mr-auto"
                />
                <Heading  fontSize={"2xl"} as="h5">
                  Email Us
                </Heading>
                <p class="leading-relaxed m-3 text-sm">
                  Email us for general quries including marketing and
                  partnership oppertunity.
                </p>
                <Button
                  className="testi-btn"
                  border={"1px solid white"}
                  colorScheme="black"
                >
                  HISC@heartfullness.org
                </Button>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                {/* <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300"> */}
                <FaPhoneAlt
                  fontSize={"30px"}
                  className="mt-3 mb-3 ml-auto mr-auto"
                />
                <Heading fontSize={"2xl"} as="h5">
                  Call Us
                </Heading>
                <p class="leading-relaxed m-3 text-sm">
                  Call us to speak to member of our team. We are always happy to
                  help.
                </p>
                <Button
                  className=" testi-btn"
                  border={"1px solid white"}
                  colorScheme="black"
                >
                  +91-9760657327
                </Button>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                {/* <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gra
                y-200 bg-gray-100" src="https://dummyimage.com/305x305"> */}
                <FaMapMarkerAlt
                  fontSize={"30px"}
                  className="mt-3 mb-3 ml-auto mr-auto"
                />
                <Heading as="h5" fontSize={"2xl"}>
                  Location
                </Heading>
                <p class="leading-relaxed text-sm m-3">
                  13-110 Kanha Village Nardegame Mandal Ranga Reddy District,
                  Telangana india Pin -566753
                </p>
                <Button
                  className="testi-btn"
                  border={"1px solid white"}
                  colorScheme="black"
                >
                  +91-9760657327
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimony;
