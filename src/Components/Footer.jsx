import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black">
      <div className="flex px-10 py-10">
        <div className="p-5 w-1/4  flex flex-col gap-10">
          <img
            className="text-white"
            src="https://demo.xpeedstudio.com/marketov2/eyeglass/wp-content/uploads/sites/16/2018/10/logo-1.png"
            alt="logo"
          />
          <div>
            <p className="text-gray-300">
              Discover premium-quality jewelry that enhances your beauty and
              confidence. Crafted with love, designed for elegance. Shop with us
              and shine every day!
            </p>
          </div>
        </div>
        <div className="w-1/4 p-5  flex flex-col gap-5 items-center">
          <p className="text-2xl text-white">Quick Links</p>
          <ul className="flex gap-5 flex-col">
            <li>
              <Link to="/" className="text-white hover:text-red-800 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-red-800 ">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-red-800 ">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-white hover:text-red-800 ">
                FAQ'S
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-red-800 ">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* col-3 */}
        <div className="w-1/4 p-5  flex flex-col gap-5">
          <p className="text-2xl text-white">Customer Support</p>

          <div>
            <div className="flex gap-2 items-center justify-inline">
              <i className="fa-solid fa-envelope text-red-800"></i>
              <p className="text-white">Email:</p>
            </div>
            <p className="text-gray-400">support@yourshop.com</p>
          </div>
          <div>
            <div className="flex gap-2">
              <i className="fa-solid fa-phone-volume text-red-800"></i>
              <p className="text-white"> Phone: </p>
            </div>
            <p className="text-gray-400">+1 (234) 567-890</p>
          </div>
          <div>
            <div className="flex gap-2">
              <i className="fa-solid fa-location-dot text-red-800"></i>
              <p className="text-white"> Address:</p>
            </div>
            <p className="text-gray-400">
              123 Jewelry Street, New York, NY, USA
            </p>
          </div>
        </div>
        {/* col-4 */}
        <div className="w-1/4 p-5  flex flex-col gap-5">
          <p className="text-2xl text-white">Subscribe to Our Newsletter</p>
          <span className="text-gray-400">
            Get the latest updates and offers directly to your inbox.
          </span>
          <div>
            <form>
              <input
                type="text"
                className="bg-white p-2"
                placeholder="Enter Your E-Mail"
              ></input>
              <button
                type="submit"
                className="bg-red-800 px-5 font-bold py-2 text-white"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex gap-8 pt-5">
            <i className="fa-brands fa-facebook p-2 rounded-full backdrop-blur-md bg-white/70 hover:bg-white border border-white text-red-800"></i>
            <i className="fa-brands fa-pinterest p-2 rounded-full backdrop-blur-md bg-white/70 hover:bg-white border border-white text-red-800"></i>
            <i className="fa-brands fa-instagram  p-2 rounded-full backdrop-blur-md bg-white/70 hover:bg-white border border-white text-red-800"></i>
            <i className="fa-brands fa-linkedin  p-2 rounded-full backdrop-blur-md bg-white/70 hover:bg-white border border-white text-red-800"></i>
            <i className="fa-brands fa-twitter  p-2 rounded-full backdrop-blur-md bg-white/70 hover:bg-white border border-white text-red-800"></i>
          </div>
        </div>
      </div>
      <hr className="w-4/5 border-t-2 border-gray-400 mx-auto" />

      <div className="flex justify-center p-10 gap-2">
        <p className="text-gray-400 text-center">
          © 2025 YourBrand. All rights reserved.
        </p>
        <p className="text-white flex gap-2">
          <Link to="/tandc" className="hover:text-white text-blue-400">
            Terms & Conditions
          </Link>
          |
          <Link to="/privacy-policy" className="hover:text-white text-blue-400">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Footer;
