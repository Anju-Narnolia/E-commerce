// import {Link} from 'react-router-dom';
// function Navbar() {
//   return (
//     <>
//       <div className="flex justify-between bg-gray-100 p-2">
//         <div className="">
//           <div className="flex gap-5">
//             <i className="fa fa-shopping-cart"></i>
//             <p className="">Free Delivery</p>
//             <p>|</p>
//             <i className="fa fa-shopping-cart"></i>
//             <p>Returns Policy</p>
//             <p>|</p>
//             <p>Follow Us</p>
//             <i className="fa-brands fa-facebook-f"></i>
//             <i className="fa-brands fa-twitter"></i>
//             <i className="fa-brands fa-instagram"></i>
//             <i className="fa-brands fa-pinterest-p"></i>
//           </div>
//         </div>
//         <div className="flex justify-center px-5 item-center">
//           <Link to="/login"> Login</Link>
//         </div>
//       </div>
//       <div className=" flex justify-between p-5">
//         <div>
//           <img
//             src="https://demo.xpeedstudio.com/marketov2/eyeglass/wp-content/uploads/sites/16/2018/10/logo-1.png"
//             alt="hu"
//           />
//         </div>
//         <div>
//           <ul className="flex gap-5 justify-center item-center font-bold text-xl">
//             <li>Home</li>
//             <li>Shope</li>
//             <li>Collection</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//         <div className="flex gap-5 relative">
//           <div className="relative">
//             <i className="fa-solid fa-heart text-red-700 text-4xl"></i>
//             <div className="rounded-full bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
//               0
//             </div>
//           </div>
//           <div className="relative">
//             <i className="fa-solid fa-cart-shopping text-4xl"></i>
//             <div className="rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
//               0
//             </div>
//           </div>
//           <div>
//             <i className="fa-solid fa-user text-4xl"></i>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Navbar;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

function Navbar() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

  // Fetch user details from Firestore
  useEffect(() => {
    const fetchUserData = async (uid) => {
      try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name); // ✅ Get name from Firestore
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserData(currentUser.uid);
      } else {
        setUser(null);
        setUserName(""); // Clear name on logout
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="flex justify-between bg-gray-100 p-2">
        <div className="flex gap-5">
          <i className="fa fa-shopping-cart"></i>
          <p>Free Delivery</p>
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

        <div className="flex justify-center px-5 items-center">
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="text-red-800 hover:underline"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-red-800 hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-between p-5">
        <div>
          <img
            src="https://demo.xpeedstudio.com/marketov2/eyeglass/wp-content/uploads/sites/16/2018/10/logo-1.png"
            alt="logo"
          />
        </div>

        <ul className="flex gap-5 justify-center items-center font-bold text-xl">
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">Collection</Link>
        </ul>

        <div className="flex gap-5 relative items-center">
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

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-user text-4xl"></i>
            {user && <span className="font-semibold">{userName}</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
