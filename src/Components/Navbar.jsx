import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-gray-100 p-2">
        <div className="">
          <div className="flex gap-5">
            <i className="fa fa-shopping-cart"></i>
            <p className="">Free Delivery</p>
            <p>|</p>
            <i className="fa fa-shopping-cart"></i>
            <p>Returns Policy</p>
            <p>|</p>
            <p>Follow Us</p>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>
        </div>
        <div className="flex justify-center px-5 item-center">
          <Link to="/login"> Login</Link>
        </div>
      </div>
      <div className=" flex justify-between p-5">
        <div>
          <img
            src="https://demo.xpeedstudio.com/marketov2/eyeglass/wp-content/uploads/sites/16/2018/10/logo-1.png"
            alt="hu"
          />
        </div>
        <div>
          <ul className="flex gap-5 justify-center item-center font-bold text-xl">
            <li>Home</li>
            <li>Shope</li>
            <li>Collection</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-5 relative">
          <div className="relative">
            <i className="fa-solid fa-heart text-red-700 text-4xl"></i>
            <div className="rounded-full bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
              0
            </div>
          </div>
          <div className="relative">
            <i className="fa-solid fa-cart-shopping text-4xl"></i>
            <div className="rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
              0
            </div>
          </div>
          <div>
            <i className="fa-solid fa-user text-4xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
