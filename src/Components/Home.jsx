import Hero from "./Hero";
import React from "react";
import Reviews from "./Data";
import Slider from "react-slick";
function Home() {
  const img1 = new URL("../assets/img/feature1-min-1.jpg", import.meta.url)
    .href;
  const img2 = new URL("../assets/img/feature2-min-1.jpg", import.meta.url)
    .href;
  const adv = new URL("../assets/img/ad-min.jpg", import.meta.url).href;
  const bn1 = new URL("../assets/img/cta_bg-min.jpg", import.meta.url).href;
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  var settings2 = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Hero />
      {/* types of product */}
      <div className="slider-container m-10 px-20 pt-10 ">
        <Slider {...settings2}>
          <div className="relative  border-2 border-gray-800">
            <img src={`/1-min-300x300.jpg`} alt="type1" />
            <div className="top-4/5 absolute">
              <p className="text-red-800 font-bold text-2xl text-center translate-x-1/2">
                Casual Shoes
              </p>
              <p className="text-center translate-x-1/2"> 20 Product</p>
            </div>
          </div>
          <div className="relative  border-2 border-gray-500">
            <img src={`/3-min-1-300x300.jpg`} alt="type1" />
            <div className="top-4/5 absolute">
              <p className="text-red-800 font-bold text-2xl text-center translate-x-1/2">
                Formal Shoes
              </p>
              <p className="text-center translate-x-1/2"> 20 Product</p>
            </div>
          </div>
          <div className="relative  border-2 border-gray-500">
            <img src={`/4-min-300x300.jpg`} alt="type1" />
            <div className="top-4/5 absolute">
              <p className="text-red-800 font-bold text-2xl text-center translate-x-1/2">
                Sports & Athletic Shoes
              </p>
              <p className="text-center translate-x-1/2"> 20 Product</p>
            </div>
          </div>
          <div className="relative  border-2 border-gray-500">
            <img src={`/5-min-300x300.jpg`} alt="type1" />
            <div className="top-4/5 absolute">
              <p className="text-red-800 font-bold text-2xl text-center translate-x-1/2">
                Boots
              </p>
              <p className="text-center translate-x-1/2"> 20 Product</p>
            </div>
          </div>
          <div className="relative  border-2 border-gray-500">
            <img src={`/5-min-300x300.jpg`} alt="type1" />
            <div className="top-4/5 absolute">
              <p className="text-red-800 font-bold text-2xl text-center translate-x-1/2">
                Traditional & Cultural Shoes
              </p>
              <p className="text-center translate-x-1/2"> 20 Product</p>
            </div>
          </div>
          <div className="relative border-2 border-gray-500">
            <img src={`/6-min-300x300.jpg`} alt="type1" />
            <div className="top-4/5 absolute ">
              <p className="text-red-800 font-bold text-2xl text-center translate-x-1/2">
                Women’s Special Shoes
              </p>
              <p className="text-center translate-x-1/2"> 20 Product</p>
            </div>
          </div>
        </Slider>
      </div>
      {/* two Products */}
      <div className=" flex justify-between items-center mt-36 m-10 px-20">
        <img src={img1} alt="feature" className="cursor-pointer" />
        <img src={img2} alt="feature" className="cursor-pointer" />
      </div>
      {/* most popular */}
      <div className="m-10 px-20 pt-10">
        <h1 className=" text-4xl  font-bold">Most Popular Products</h1>
        <div className="flex flex-row gap-10 my-10">
          {[
            {
              id: 1,
              name: "Adidas Campus Red Sneakers",
              price: 99.99,
              prices: 99.99,
              image: new URL("../assets/img/1-min-300x300.jpg", import.meta.url)
                .href,
            },
            {
              id: 2,
              name: "Nike Air Max 270",
              price: 129.99,
              prices: 129.99,
              image: new URL(
                "../assets/img/3-min-1-300x300.jpg",
                import.meta.url
              ).href,
            },
            {
              id: 3,
              name: "Puma RS-X Bold",
              price: 109.99,
              prices: 109.99,
              image: new URL("../assets/img/4-min-300x300.jpg", import.meta.url)
                .href,
            },
            {
              id: 4,
              name: "Reebok Classic Leather",
              price: 89.99,
              prices: 89.99,
              image: new URL("../assets/img/5-min-300x300.jpg", import.meta.url)
                .href,
            },
            {
              id: 5,
              name: "New Balance 574",
              price: 119.99,
              prices: 119.99,
              image: new URL("../assets/img/6-min-300x300.jpg", import.meta.url)
                .href,
            },
          ].map((product) => (
            <div
              key={product.id}
              className="border-2 border-gray-300 p-4 w-1/5"
            >
              <img src={product.image} alt="shoe" />
              <p>{product.name}</p>
              <div className="flex gap-2">
                <p className="text-red-400 line-through">${product.price}</p>
                <p className="text-red-800">${product.prices}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* values */}
      <div className="flex gap-1 m-10 px-20 p-10 flex-wrap justify-center">
        <div className="flex gap-5 border-2 border-red-500 p-6 justify-center items-center">
          <i className="fa-solid fa-truck text-red-600 text-3xl text-center"></i>
          <div>
            <p className="text-xl font-bold">Free Delivery</p>
            <p className="font-bold text-gray-400 text-md">from $78</p>
          </div>
        </div>
        <div className="flex gap-5 border-2 border-red-500 p-6 justify-center items-center">
          <i className="fa-solid fa-people-group text-red-600 text-3xl items-center"></i>
          <div>
            <p className="text-xl font-bold">99% Customer</p>
            <p className="font-bold text-gray-400 text-md">feedbacks</p>
          </div>
        </div>
        <div className="flex gap-5 border-2 border-red-500 p-6 justify-center items-center">
          <i className="fa-solid fa-person-walking-arrow-loop-left text-red-600 text-3xl items-center"></i>
          <div>
            <p className="text-xl font-bold">10 Days</p>
            <p className="font-bold text-gray-400 text-md">for free return</p>
          </div>
        </div>
        <div className="flex gap-5 border-2 border-red-500 p-6 justify-center items-center">
          <i className="fa-solid fa-sack-dollar text-red-600 text-3xl items-center"></i>
          <div>
            <p className="text-xl font-bold">Payment</p>
            <p className="font-bold text-gray-400 text-md">secure system</p>
          </div>
        </div>
        <div className="flex gap-5 border-2 border-red-500 p-8 justify-center items-center">
          <i className="fa-solid fa-headset text-red-600 text-3xl items-center"></i>
          <div>
            <p className="text-xl font-bold">24/7</p>
            <p className="font-bold text-gray-400 text-md">online supports</p>
          </div>
        </div>
      </div>
      {/* advertisement */}
      <div className="flex gap-10 m-10 px-20 p-10">
        <img src={adv} alt="advertisement" />
        <div className="">
          <div className="flex flex-wrap justify-between items-center w-full">
            <div>
              <p className="font-semibold text-3xl">Discount Products</p>
            </div>
            <div className="flex space-x-6">
              <p className="text-gray-700 hover:text-red-700 font-medium">
                57% Off
              </p>
              <p className="text-gray-700 hover:text-red-700 font-medium">
                30% Off
              </p>
              <p className="text-gray-700 hover:text-red-700 font-medium">
                10% Off
              </p>
            </div>
          </div>
          <hr className="text-gray-300 border-2 border-gray-300 my-1" />
          {/* Add margin-top here to create space */}
          <div className="grid grid-cols-3 gap-10 mt-6">
            {[
              {
                id: 1,
                name: "Adidas Campus Red Sneakers",
                price: 99.99,
                prices: 99.99,
                image: new URL(
                  "../assets/img/1-min-300x300.jpg",
                  import.meta.url
                ).href,
              },
              {
                id: 2,
                name: "Nike Air Max 270",
                price: 129.99,
                prices: 129.99,
                image: new URL(
                  "../assets/img/3-min-1-300x300.jpg",
                  import.meta.url
                ).href,
              },
              {
                id: 3,
                name: "Puma RS-X Bold",
                price: 109.99,
                prices: 109.99,
                image: new URL(
                  "../assets/img/4-min-300x300.jpg",
                  import.meta.url
                ).href,
              },
              {
                id: 4,
                name: "Reebok Classic Leather",
                price: 89.99,
                prices: 89.99,
                image: new URL(
                  "../assets/img/5-min-300x300.jpg",
                  import.meta.url
                ).href,
              },
              {
                id: 5,
                name: "New Balance 574",
                price: 119.99,
                prices: 119.99,
                image: new URL(
                  "../assets/img/6-min-300x300.jpg",
                  import.meta.url
                ).href,
              },
              {
                id: 6,
                name: "New Balance 574",
                price: 119.99,
                prices: 119.99,
                image: new URL(
                  "../assets/img/6-min-300x300.jpg",
                  import.meta.url
                ).href,
              },
            ].map((product) => (
              <div
                key={product.id}
                className="hover:border-2 hover:border-gray-300 p-4 hover:shadow-lg"
              >
                <img src={product.image} alt="shoe" />
                <p>{product.name}</p>
                <div className="flex gap-2">
                  <p className="text-red-400 line-through">${product.price}</p>
                  <p className="text-red-800">${product.prices}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="slider-container">
        <Slider {...settings1} className="gap-5 flex">
          <div className="relative">
            <img src={bn1} alt="hi" className="w-full h-auto" />{" "}
            <div className="absolute slide-up top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-4xl text-white">Limited-Time Offer!</p>
              <span className="text-gray-700 text-xl">
                Get 50% OFF on our latest collection. Hurry, offer ends soon!
              </span>
              <div className="flex gap-3">
                <p className="text-red-400 line-through">200$</p>
                <p className="text-red-800 ">100$</p>
              </div>
              <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition">
                Shop Now
              </button>

              <button className="bg-white">View Collection</button>
            </div>
          </div>
          <div className="relative">
            <img src={bn1} alt="hi" className="w-full h-auto" />{" "}
            <div className="absolute slide-up top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-4xl text-white">Limited-Time Offer!</p>
              <span className="text-gray-700 text-xl">
                Get 50% OFF on our latest collection. Hurry, offer ends soon!
              </span>
              <div className="flex gap-3">
                <p className="text-red-400 line-through">200$</p>
                <p className="text-red-800 ">100$</p>
              </div>
              <button className="bg-red-700">Shop Now</button>
              <button className="bg-white">View Collection</button>
            </div>
          </div>
          <div className="relative">
            <img src={bn1} alt="hi" className="w-full h-auto" />{" "}
            <div className="absolute slide-up top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-4xl text-white">Limited-Time Offer!</p>
              <span className="text-gray-700 text-xl">
                Get 50% OFF on our latest collection. Hurry, offer ends soon!
              </span>
              <div className="flex gap-3">
                <p className="text-red-400 line-through">200$</p>
                <p className="text-red-800 ">100$</p>
              </div>
              <button className="bg-red-700">Shop Now</button>
              <button className="bg-white">View Collection</button>
            </div>
          </div>
        </Slider>
      </div>
      {/* Top Brands */}
      <div className="m-10 px-20 pt-10 font-bold">
        <p className="text-4xl p-2">Top Brands</p>
        <div className="flex gap-16 justify-center items-center">
          {[
            {
              id: 1,
              image: new URL("../assets/img/b1-min.png", import.meta.url).href,
            },
            {
              id: 2,
              image: new URL("../assets/img/b2-min-1 (1).png", import.meta.url)
                .href,
            },
            {
              id: 3,
              image: new URL("../assets/img/b3-min.png", import.meta.url).href,
            },
            {
              id: 4,
              image: new URL("../assets/img/b4-min.png", import.meta.url).href,
            },
            {
              id: 5,
              image: new URL("../assets/img/b5-min.png", import.meta.url).href,
            },
          ].map((brand) => (
            <div key={brand.id}>
              <img src={brand.image} alt="img" className="w-64" />
            </div>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <div className=" m-10 px-20 pt-10 ">
        <h2 className="text-3xl font-bold mb-6">
          Customer Reviews & Testimonials
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            {Reviews.map((reviews) => (
              <div
                key={reviews.id}
                className="p-6 rounded-lg shadow-md bg-white mx-5 !m-5"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={reviews.photo}
                    alt={reviews.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-lg font-semibold">{reviews.name}</p>
                    <p className="text-sm text-gray-500">{reviews.product}</p>
                  </div>
                </div>
                <p className="text-gray-700">{reviews.feedback}</p>
                <p className="text-yellow-500 mt-2">
                  {"★".repeat(Math.floor(reviews.rating))}
                  {reviews.rating % 1 !== 0 ? "☆" : ""}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Home;
