import React, { useRef, useEffect, useLayoutEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import bat from "../../../public/batminton.png";
import gym from "../../../public/gym.png";
import swim from "../../../public/swim.png";
import squash from "../../../public/squash.png";
import car1 from "../../../public/car1.jpeg";
import car2 from "../../../public/car2.jpeg";
import car3 from "../../../public/car3.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Dummy = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });
  return (
    <div className="carousel" ref={component}>
      <div ref={slider} className="carousel-wrapper">
        <section className="main-carousel panel carol-bg1">
          <div className="grid-1">
            <div className="card glow">
              <Image src={bat} alt="alt" />
            </div>
          </div>
          <div className="grid-2">
            <Card p={"4"}>
              <Heading mb={4} size="2xl">
                {" "}
                FITNESS OASIS AWAITS
              </Heading>
              <Text>
                We have a fully equipped gym where you can begin or continue
                your fitness journey. There are numerous benefits to joining a
                gym and incorporating regular exercise into your routine.
                Overall, the benefits of joining a gym go beyond physical health
                and can positively impact mental and emotional wellbeing as well
              </Text>
            </Card>
          </div>
          <div className="grid-3">
            <div className="pic-1">
              <Image src={car2} alt="alt" />
            </div>
            <div className="pic-2">
              <Image src={car1} alt="alt"/>
            </div>
            <div className="pic-3">
              <Image src={car3} alt="alt"/>
            </div>
          </div>
        </section>

        <section className="main-carousel panel carol-bg2">
          <div className="grid-1">
            <div className="card glow">
              <Image src={gym} alt="alt"/>
            </div>
          </div>
          <div className="grid-2">
            <Card p={"4"}>
              <Heading mb={4} size="2xl">
                {" "}
                Empowering Badminton Excellence
              </Heading>
              <Text>
                With 40 full-time students residing and training in Kanha, they
                will receive top-notch coaching from the Pullela Gopichand
                Badminton Academy. Our international-quality facility boasts 14
                courts, a 100-person viewing gallery, and the capacity to host
                tournaments at all levels. Join us as we nurture the talent of
                aspiring badminton players.
              </Text>
            </Card>
          </div>
          <div className="grid-3">
            <div className="pic-1">
              <Image src={car2} alt="alt"/>
            </div>
            <div className="pic-2">
              <Image src={car1} alt="alt"/>
            </div>
            <div className="pic-3">
              <Image src={car3} alt="alt"/>
            </div>
          </div>
        </section>

        <section className="main-carousel panel carol-bg3">
          <div className="grid-1">
            <div className="card glow">
              <Image src={swim} alt="alt"/>
            </div>
          </div>
          <div className="grid-2">
            <Card p={"4"}>
              <Heading mb={4} size="2xl">
                {" "}
                SPLASH INTO WELLNESS
              </Heading>
              <Text>
                Dive into the world of swimming, a beloved water-based activity
                that offers a full-body workout through arm and leg movements.
                Whether for leisure or competition, swimming engages muscles
                throughout the body, providing a low-impact exercise option. Our
                facility boasts a semi-heated indoor swimming pool with 25
                meters and 5 lanes, perfect for leisurely swims or learn-to-swim
                programs. Additionally, it serves as an excellent venue for
                athlete warm-ups, cool-downs, and rehabilitation exercises. Jump
                in and make a splash!
              </Text>
            </Card>
          </div>
          <div className="grid-3">
            <div className="pic-1">
              <Image src={car2} alt="alt"/>
            </div>
            <div className="pic-2">
              <Image src={car1} alt="alt"/>
            </div>
            <div className="pic-3">
              <Image src={car3} alt="alt"/>
            </div>
          </div>
        </section>

        <section className="main-carousel panel carol-bg4">
          <div className="grid-1">
            <div className="card glow">
              <Image src={squash} alt="alt"/>
            </div>
          </div>
          <div className="grid-2">
            <Card p={"4"}>
              <Heading mb={4} size="2xl">
                {" "}
                MASTER THE SQUASH
              </Heading>
              <Text>
                Squash is a popular racquet sport that is played by two or four
                players in a four-walled court with a small, hollow rubber ball.
                The objective of the game is to hit the ball against the front
                wall, making it difficult for the opponent to return the ball.
                Three international-standard wooden courts Capable of hosting
                state and national tournaments A viewing gallery with seating
                for 50 persons
              </Text>
            </Card>
          </div>
          <div className="grid-3">
            <div className="pic-1">
              <Image src={car2} alt="alt"/>
            </div>
            <div className="pic-2">
              <Image src={car1} alt="alt" />
            </div>
            <div className="pic-3">
              <Image src={car3} alt="alt"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dummy;
