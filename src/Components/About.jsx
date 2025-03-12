import about1 from "../assets/img/about_us_img_11.png";
import about2 from "../assets/img/about_us_img_21.png";
function About() {
  return (
    <div className="m-10 px-20 p-10">
      <section className="mb-8 flex items-center gap-6">
        <img src={about1} alt="About Us" className="w-1/3 rounded-lg" />
        <div className="w-2/3 flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Who We Are</h2>
          <p className="text-gray-700 mt-2">
            Welcome to <strong>[Your Store Name]</strong>, your go-to
            destination for high-quality <strong>shoes and jewelry</strong>. We
            believe fashion is about confidence, comfort, and style.
          </p>
          <p className="text-gray-700 mt-4">
            Our collection blends modern trends with timeless elegance, ensuring
            top-notch quality and craftsmanship. Whether it's the perfect shoes
            or stunning jewelry, we’ve got you covered.
          </p>
          <div className=" flex gap-10 justify-center">
            <div className="bg-gray-200 rounded-md p-3">
              <p className="text-3xl text-red-800 font-bold">12+</p>
              <p className="text-gray-800">Years Experience</p>
            </div>
            <div className="bg-gray-200 rounded-md p-3">
              <p className="text-3xl text-red-800 font-bold">20K</p>
              <p className="text-gray-800">Happy Customers</p>
            </div>
            <div className="bg-gray-200 rounded-md p-3">
              <p className="text-3xl text-red-800 font-bold">100%</p>
              <p className="text-gray-800">Clients Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Mission */}
      <section className="mb-8 flex items-center gap-6 mt-10">
        <div className="w-2/3 flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            Our mission is simple:{" "}
            <strong>
              to provide premium, stylish, and affordable footwear and jewelry
            </strong>{" "}
            that elevate your everyday look. Whether you're stepping out for a
            casual day or dressing up for a special occasion, we have the
            perfect match for you.
          </p>
          <ul className="list-disc list-inside text-gray-700 ">
            <li>
              <strong className="text-red-800">Quality You Can Trust</strong> –
              We carefully select the finest materials to ensure durability and
              comfort.
            </li>
            <li>
              <strong className="text-red-800">
                Trendy & Timeless Designs
              </strong>{" "}
              – Our collection blends classic styles with modern trends.
            </li>
            <li>
              <strong className="text-red-800">
                Customer Satisfaction First
              </strong>{" "}
              – Your happiness is our priority, and we’re always here to assist
              you.
            </li>
            <li>
              <strong className="text-red-800">Fast & Secure Shipping</strong> –
              Enjoy a seamless shopping experience with quick deliveries.
            </li>
          </ul>
        </div>
        <img src={about2} alt="About Us" className="w-1/3 rounded-lg" />
      </section>
      {/* Our teams */}
      <div>
        <p className="text-3xl font-bold py-2 mt-10">Meet with our Team</p>
        <p className="text-gray-700 mt-2">
          We are a team of passionate individuals dedicated to bringing you the
          best shopping experience. Our designers, craftsmen, and customer
          support specialists work tirelessly to ensure every purchase exceeds
          your expectations.
        </p>
        <div className="grid grid-cols-4 gap-6 mt-2">
          {[
            {
              id: 1,
              post: "FOUNDER",
              name: "Tony Williamson",
              img: new URL("../assets/img/team_11.png", import.meta.url).href,
            },
            {
              id: 2,
              post: "CO-FOUNDER",
              name: "Emma Roberts",
              img: new URL("../assets/img/team_21.png", import.meta.url).href,
            },
            {
              id: 3,
              post: "MARKETING HEAD",
              name: "James Anderson",
              img: new URL("../assets/img/team_31.png", import.meta.url).href,
            },
            {
              id: 4,
              post: "TECH LEAD",
              name: "Sophia Martinez",
              img: new URL("../assets/img/team_41.png", import.meta.url).href,
            },
          ].map((member) => (
            <div
              key={member.id}
              className="text-center p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-56 h-56 rounded-full mx-auto"
              />
              <p className="text-lg font-semibold mt-3 text-red-800">
                {member.post}
              </p>
              <p className="text-gray-700">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* News Letter */}
      <section className=" p-6 bg-red-800 rounded-lg mt-10">
        <h2 className="text-4xl font-semibold text-white">Join Us!</h2>
        <p className="text-gray-200 mt-2">
          Be part of our journey! Follow us on social media, sign up for
          exclusive deals, and stay updated with our latest collections.
        </p>
        <div className="mt-6 flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-96 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-white text-red-800 px-6 py-3 rounded-r-lg hover:bg-black transition">
            Subscribe
          </button>
        </div>

        <p className="mt-4 text-white">
          📩 <strong >Have questions?</strong> Contact us at{" "}
          <a
            href="mailto:anjunarnolia93@gmail.com"
            className="text-gray-400 hover:underline"
          >
            anjunarnolia93@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
export default About;
