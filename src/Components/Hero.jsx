import React from "react";
import Slider from "react-slick";
import redShoe from "../assets/img/red_shoe-min-1-1.png";
import blueShoe from "../assets/img/blue_shoe-min.png";
import yellowShoe from "../assets/img/yellow-shoe.png";
import redrun from "../assets/img/re_run-min-1.png";
import bluerun from "../assets/img/blue_text-min.png";
import yellowrun from "../assets/img/run_text.png";
export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* slide1 */}
        <div className="slider-bg1 !flex flex-row items-center justify-between px-10 w-full">
          <div className=" flex-col text-left w-1/3 inline-flex gap-7 ml-20">
            <h1 className="text-2xl font-bold text-blue-700">Our Exclusive</h1>
            <p className="text-6xl m-3">Adidas Campus</p>
            <span className="block">
              We have all your auto parts needs! Are you looking for the best
              performance car parts and car accessories
            </span>
            <button
              type="submit"
              className="bg-black text-white hover:bg-blue-700 cursor-pointer px-10 py-3 w-2/3"
            >
              VIEW COLLECTIONS
            </button>
          </div>
          <div className="redShoe w-1/2 flex justify-center">
            <img src={bluerun} alt="red run" className="absolute top-0"/>
          <img src={blueShoe} alt="red Sheo" className="absolute top-36"/>
          </div>
        </div>
        {/* slides-2 */}
        <div className="slider-bg2 !flex flex-row items-center justify-between px-10 w-full">
          <div className=" flex-col text-left w-1/3 inline-flex gap-7 ml-20">
            <h1 className="text-2xl font-bold text-red-700">Our Exclusive</h1>
            <p className="text-6xl m-3">Adidas Campus</p>
            <span className="block">
              We have all your auto parts needs! Are you looking for the best
              performance car parts and car accessories
            </span>
            <button
              type="submit"
              className="bg-black text-white hover:bg-red-700 cursor-pointer px-10 py-3 w-2/3"
            >
              VIEW COLLECTIONS
            </button>
          </div>
          <div className="redShoe w-1/2 flex justify-center">
            <img src={redrun} alt="red run" className="absolute top-0"/>
          <img src={redShoe} alt="red Sheo" className="absolute top-36"/>
          </div>
        </div>
        {/* slide3 */}
        <div className="slider-bg3 !flex flex-row items-center justify-between px-10 w-full">
          <div className=" flex-col text-left w-1/3 inline-flex gap-7 ml-20">
            <h1 className="text-2xl font-bold text-yellow-500">Our Exclusive</h1>
            <p className="text-6xl m-3">Adidas Campus</p>
            <span className="block">
              We have all your auto parts needs! Are you looking for the best
              performance car parts and car accessories
            </span>
            <button
              type="submit"
              className="bg-black text-white hover:bg-yellow-500 cursor-pointer px-10 py-3 w-2/3"
            >
              VIEW COLLECTIONS
            </button>
          </div>
          <div className="redShoe w-1/2 flex justify-center">
            <img src={yellowrun} alt="red run" className="absolute top-0"/>
          <img src={yellowShoe} alt="red Sheo" className="absolute top-36"/>
          </div>
        </div>
      </Slider>
    </div>
  );
}
