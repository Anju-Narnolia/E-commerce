import Hero from "./Hero";
function Home() {
  const img1 = new URL("../assets/img/feature1-min-1.jpg", import.meta.url)
    .href;
  const img2 = new URL("../assets/img/feature2-min-1.jpg", import.meta.url)
    .href;

  return (
    <>
      <Hero />
      <div className=" flex gap-50 justify-center items-center mt-36">
        <img src={img1} alt="feature" className="cursor-pointer" />
        <img src={img2} alt="feature" className="cursor-pointer" />
      </div>
      {/* most popular */}
      <div className="m-10">
        <h1 className=" text-3xl font-bold">Most Popular Products</h1>
        <div className="flex flex-row gap-10 m-10">
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
      <div className="flex gap-1 m-10 justify-center flex-wrap">
        <div className="flex gap-5 border-2 border-red-500 p-10 justify-center items-center">
          <i className="fa-solid fa-truck text-red-600 text-3xl text-center"></i>
          <div>
            <p className="text-xl font-bold">Free Delivery</p>
            <p className="font-bold text-gray-400 text-md">from $78</p>
          </div>
        </div>

        <div className="flex gap-5 border-2 border-red-500 p-10 justify-center items-center">
          <i className="fa-solid fa-people-group text-red-600 text-3xl items-center"></i>
          <div>
            <p className="text-xl font-bold">99% Customer</p>
            <p className="font-bold text-gray-400 text-md">feedbacks</p>
          </div>
        </div>

        <div className="flex gap-5 border-2 border-red-500 p-10 justify-center items-center">
          <i className="fa-solid fa-person-walking-arrow-loop-left text-red-600 text-3xl items-center"></i>
          <div>
            <p className="text-xl font-bold">10 Days</p>
            <p className="font-bold text-gray-400 text-md">for free return</p>
          </div>
        </div>

        <div className="flex gap-5 border-2 border-red-500 p-10 justify-center items-center">
          <i className="fa-solid fa-sack-dollar text-red-600 text-3xl items-center"></i>
          <div>
            <p className="text-xl font-bold">Payment</p>
            <p className="font-bold text-gray-400 text-md">secure system</p>
          </div>
        </div>

        <div className="flex gap-5 border-2 border-red-500 p-10 justify-center items-center">
          <i className="fa-solid fa-headset text-red-600 text-3xl items-center"></i>
          <div>
            <p className="text-xl font-bold">24/7</p>
            <p className="font-bold text-gray-400 text-md">online supports</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
