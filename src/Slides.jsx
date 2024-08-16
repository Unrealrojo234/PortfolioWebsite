import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./assets/EmblaCarouselArrowButtons";

import anime from "../public/Images/projects/anime.png";
import calc from "../public/Images/projects/compound.png";
import holo from "../public/Images/projects/holo.png";
import nancy from "../public/Images/projects/nancyobita.png";
import search from "../public/Images/projects/search.png";
import resume from "../public/Images/projects/resume.png";
import dbz from "../public/Images/projects/simplewebapp.png";

const Slides = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla container-fluid">
      <h1 id="songs">
        My Work{" "}
        <i
          className="fa-solid fa-laptop-code fa-xl"
          style={{ color: "#63E6BE" }}
        ></i>
      </h1>
      <div className="text-center"></div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {works.map((index) => (
            <div className="embla__slide" key={index.name}>
              <div className="embla__slide__number"> 
                <div className="text-center">
                    <p style={{fontSize:24}}>{index.name}</p>
                    <img src={index.img} style={{maxWidth:'16rem'}} className="img-fluid"/>
                    <br/>
                    <a href={index.link} style={{fontSize:24,textDecoration:'none'}} target="blank">Visit Site</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Slides;

const works = [
  {
    name: "Holo Mixed School Website",
    link: "https://holosecondaryschool.xyz/",
    img: holo,
  },
  {
    name: "Nancy Obita Website",
    link: "https://www.nancy-obita.com/",
    img: nancy,
  },
  {
    name: "Compound Interest Calc",
    link: "https://unrealrojo234.github.io/compoundInterestCalc/",
    img: calc,
  },
  {
    name: "Search Up Countries",
    link: "https://search-up-countries.vercel.app/",
    img: search,
  },
  {
    name: "CV Generator",
    link: "https://github.com/Unrealrojo234/CV-ResumeGenerator",
    img: resume,
  },
  {
    name: "Anime Chart",
    link: "https://unrealrojo234.github.io/animeChart/",
    img: anime,
  },
  {
    name: "Simple Web App",
    link: "https://dbz-web-app.vercel.app/",
    img: dbz,
  },
];
