import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import image from "../../../public/car2.jpeg";
import Image from "next/image";

export const CarouselComp = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });

  let slides = [
    {
      key: uuidv4(),
      content: <Image src={image} alt="1" width={"1300px"} />,
    },
    {
      key: uuidv4(),
      content: <Image src={image} alt="2" width={"1300px"} />,
    },
    {
      key: uuidv4(),
      content: <Image src={image} alt="3" width={"1300px"} />,
    },
    {
      key: uuidv4(),
      content: <Image src={image} alt="4" width={"1300px"} />,
    },
    {
      key: uuidv4(),
      content: <Image src={image} alt="5" width={"1300px"} />,
    },
    {
      key: uuidv4(),
      content: <Image src={image} alt="6" width={"1300px"} />,
    },
    {
      key: uuidv4(),
      content: <Image src={image} alt="7" width={"1300px"} />,
    },
    {
      key: uuidv4(),
      content: <Image src={image} alt="8" width={"1300px"} />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  const onChangeInput = (e) => {
    setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div
      // style={{ width: "100%", height: "80vh", margin: "0 auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="carousel"
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      {/* <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <label>Go to slide: </label>
          <input name="goToSlide" onChange={onChangeInput} />
        </div>
        <div>
          <label>Offset Radius: </label>
          <input name="offsetRadius" onChange={onChangeInput} />
        </div>
        <div>
          <label>Show navigation: </label>
          <input
            type="checkbox"
            checked={state.showNavigation}
            name="showNavigation"
            onChange={(e) => {
              setState({ showNavigation: e.target.checked });
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.gentle });
            }}
            disabled={state.config === config.gentle}
          >
            Gentle Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.slow });
            }}
            disabled={state.config === config.slow}
          >
            Slow Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.wobbly });
            }}
            disabled={state.config === config.wobbly}
          >
            Wobbly Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.stiff });
            }}
            disabled={state.config === config.stiff}
          >
            Stiff Transition
          </button>
        </div>
      </div> */}
    </div>
  );
};
